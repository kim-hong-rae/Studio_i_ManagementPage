import logo from './logo.svg';
import './App.css';
import InternalMainpage from './Pages/InternalPage/InternalMainpage';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InternalMainpage />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
