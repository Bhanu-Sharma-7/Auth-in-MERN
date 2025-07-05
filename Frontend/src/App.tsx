import { Routes, Route } from "react-router-dom";
import BruditeSignup from "./Pages/Signup";
import BruditeLogin from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<BruditeSignup />} />
      <Route path="/login" element={<BruditeLogin />} />
      <Route path="/" element={<BruditeLogin />} />
    </Routes>
  );
}

export default App;
