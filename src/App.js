import logo from './logo.svg';
import './App.css';
import InternalMainpage from './Pages/InternalPage/InternalMainpage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditNoticeMainpage from "./Pages/NoticeBoardPage/EditNoticePage/EditNoticeMainpage";
import MakingNoticeMainpage from "./Pages/NoticeBoardPage/MakingNoticePage/MakingNoticeMainpage";
import PlanNoticeMainpage from "./Pages/NoticeBoardPage/PlanNoticePage/PlanNoticeMainpage";
import LoginPage from "/Pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InternalMainpage />}/>
        <Route path="/EditMain" element={<EditNoticeMainpage />}/>
        <Route path="/MakingMain" element={<MakingNoticeMainpage />}/>
        <Route path="/PlanMain" element={<PlanNoticeMainpage />}/>
        <Route path="/LoginPage" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
