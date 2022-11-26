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
function App() {
  useEffect(()=>{
    
    
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    window.onscroll = function() {myFunction()};
    $(function() {
      
      let x,y;
      $(".noticebox").on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
          top: y,
          left: x
        });
      });
      $(".noticebox").on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
          top: y,
          left: x
        });
      });
    });

  },[])
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
           
          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
