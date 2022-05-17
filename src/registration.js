import { Link } from "react-router-dom";
export default function Registration(){
    return <div className="block"> 
    <form>
            <h1>Registration Form </h1>
            <label>First Name </label><br />
            <input type="text" placeholder="Husnain" /><br />
            <label>Second Name </label><br />
            <input type="text" placeholder="Mahoon" /> <br />
            <label>Email</label> <br />
            <input type="text" placeholder="Email" /> <br />
            <label>Password</label><br />
            <input type="password" placeholder="*******" />
          </form>
          <button>Submit</button> 
          <div> <Link to="/Login">I am already a member</Link></div>
          
     
    </div>
}