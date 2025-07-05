import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../Images/login-2.png';
import '../CSS/style.css';

const BruditeSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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
      const res = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Signup successful! 🎉');
        setFormData({ username: '', email: '', password: '' });
      } else {
        alert(data.message || 'Signup failed ❌');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Server Error 🚨');
    }
  };

  return (
    <div className="login-container">
      <div className="left-box-container">
        <img src={loginImage} alt="Login visual" className="left-box-image" />
      </div>

      <div className="right-box-container">
        <div className="signup-page">
          <Link to="/login">Login</Link>
        </div>

        <div className="login-form-container">
          <div className="login-title">
            <h2>Sign up to Brudite</h2>
          </div>

          <div className="login-form">
            <form className="login-form-tag" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <div className="username-container input-field">
                <input
                  type="text"
                  name="username"
                  placeholder="example-1"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BruditeSignup;
