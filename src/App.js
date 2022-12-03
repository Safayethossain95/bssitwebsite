import {useEffect} from 'react'
import './sassFiles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import TestPage from './pages/TestPage';
import $ from 'jquery';
import AboutUsPage from './pages/AboutUsPage';
import NoticePage from './pages/NoticePage';
import ForgotPassword from './pages/ForgotPassword';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />           
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgetpassword" element={<ForgotPassword/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/notice" element={<NoticePage/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
