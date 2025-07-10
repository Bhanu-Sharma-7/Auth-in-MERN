import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import loginImage from '../Images/login-2.png';
import '../CSS/style.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const BruditeLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await loginSchema.validate(formData, { abortEarly: false });

      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Your token is: ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        alert(err.errors.join('\n'));
      } else {
        console.error('Login Error:', err);
        alert('Server Error');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-box-container">
        <img src={loginImage} alt="Login visual" className="left-box-image" />
      </div>

      <div className="right-box-container">
        <div className="signup-page">
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="login-form-container">
          <div className="login-title">
            <h2>Login to Brudite</h2>
          </div>

          <div className="login-form">
            <form className="login-form-tag" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <div className="email-container input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="password">Password</label>
              <div className="password-container input-field">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="example#password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="show-and-hide" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </div>

              <button type="submit" className="form-submit-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BruditeLogin;
