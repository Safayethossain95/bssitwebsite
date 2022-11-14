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
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
           
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
