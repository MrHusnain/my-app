import { BrowserRouter,Routes,Route,Link,useHistory,Redirect} from 'react-router-dom';
import './App.css';
import Login from './login';
import Forget from './forget';
import Registration from './registration';
import Home from './home';
import App from './usestate';
import Wellcome from './Wellcomepage';








export default function () {
  return <div>
  <BrowserRouter>
  
    <Routes>
    <Route path='/usestate'element={<App></App>}></Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Login" element={<Login></Login>}></Route>
    <Route path="/Registration" element={<Registration></Registration>}></Route>
    <Route path="/Forget" element={<Forget></Forget>}></Route>
    <Route path="/Wellcomepage" element={<Wellcome></Wellcome>}></Route>

    </Routes>
  </BrowserRouter>
  </div>
    
     
   
}