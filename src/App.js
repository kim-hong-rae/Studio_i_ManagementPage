import logo from "./logo.svg";
import "./login/LoginPage.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
