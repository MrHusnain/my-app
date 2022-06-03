
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
export default function Registration(){
  const [firstName,setFirstName]=useState("husnain");
  const [surName,setSurename]=useState();
  const [Password,setPassword]=useState();
  const [Email,SetEmail]=useState();
  // const [submit,SetSubmit]=useState(false);

  const onEmail = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="isEmail"){
      SetEmail(e.target.value);
      
    }
  }
  const onPassWord = (e)=>{
    console.log(e.target.name);
    if(e.target.name==="PassWord"){
      setPassword(e.target.value);
    }
    
  }
  const onSureName = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="Sname"){
      setSurename(e.target.value);
    }
  }
  const onTextFieldChang = (e)=>{
    console.log(e.target.name);
    if (e.target.name==="fName"){
      setFirstName(e.target.value);
    }
  }
  const navigate = useNavigate();
  const handlRegister =  (e)=>{
   
    console.log(firstName);
    console.log(surName);
    console.log(Email);
    console.log(Password);
    if (firstName && surName && Email && Password){
      // SetSubmit(true);
      navigate("/Wellcomepage");}
    else {
        alert("plz complete all inputs")
      }
    
  }
  
 
   
  
    return <div className="block"> 
    <form>
            <h1>Registration Form </h1>
            <label>firstName </label><br />
            <input name="fName" type="text"  onChange={onTextFieldChang} value={firstName} placeholder="Husnain" /><br />
            <label>Surname </label><br />
            <input name="Sname" type="text" onChange={onSureName} value={surName}  placeholder="Mahoon" /> <br />
            <label>Email</label> <br />
            <input type="email" name="isEmail" onChange={onEmail} value={Email} placeholder="Email" /> <br />
        
            <label>Password</label><br />
            <input name="PassWord" type="password" onChange={onPassWord} value={Password} placeholder="*******" />
            <input type="button" onClick={handlRegister} name="submit" value="Submit" />
          </form>
          
          <div> <Link to="/Login">I am already a member</Link></div>
          
     
    </div>
    }
