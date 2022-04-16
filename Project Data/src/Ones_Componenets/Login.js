import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

export default function Home(){
	let navigate=useNavigate();
	const [role,setRole]=useState("");
	const [msg,setMsg]=useState("");
	

	const [user,setUser]=useState({
		username:"",
		password:"",
	});

	/*useEffect(()=>{
		fetch("http://localhost:8080/getAllu").then(resp=>resp.json()).then(data=>setUsers(data));
	},[]);*/

	const handleInput=(e)=>{
		setUser((state)=>({
		   ...state,
		   [e.target.name]:e.target.value
		   
		}));
	  }

	  const checkData=(e)=>{
		  e.preventDefault();
		  const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
        username:user.username,
        password:user.password,	
			})
		}
		fetch("http://localhost:8080/getRole",reqData).then(resp=>resp.text()).then((data)=>{setRole(data)});
		console.log(role);
		
	 }

	 const submitData=(e)=>{
		 e.preventDefault();
		 if(role=="Customer"||role=="Shopkeeper")
		{
			localStorage.setItem("userInfo", JSON.stringify(user));
		    if(role==="Customer")
		    {
		       navigate('/custHome/*');
		    } 
		    if(role==="Shopkeeper")  
		       navigate('/shopkeeperHome');	
		}
		  
		 else
		   {
			   alert("Invalid username or password");

		   }
		
	 }


	return(
		<div className="container" style={{ backgroundColor:"lightgreen",borderStyle:"solid", borderWidth:"2px"}}>
		  <center>
		  <h1><u>User Login</u></h1><br/>
				<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
                <br/>
				   <form>
					  <div>
                         <h5 className="form-label col-md-2">Username:</h5>
                         <span className="col-md-10">
                           <input type="text" name="username" className="form-control" placeholder="Enter username"
                          onChange={handleInput} value={user.username} />
                        </span>
                     </div>
					 <div>
                        <h5 className="form-label col-md-2">Password:</h5>
                        <span className="col-md-10">
                        <input type="password" name="password" value={user.password} className="form-control" placeholder="Enter password" minLength={"8"} maxLength={"16"}
                          onChange={handleInput} onMouseLeave={checkData}
						   />
                        </span>
						<div className="form-group">
                      <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                          <input type="submit" value="Login" class="btn btn-primary btn-lg btn-block" onClick={submitData} />
                      </div>
                 </div>
                  </div>

					</form>
                </div>
				<br/>
				<h3 style={{ color:"red"}}><i>{msg}</i></h3>
		  </center>
		</div>  
	);
}