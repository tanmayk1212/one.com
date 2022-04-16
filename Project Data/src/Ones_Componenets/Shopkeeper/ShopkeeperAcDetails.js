import React from 'react';
import { useEffect,useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import ShopkeeperHome from './ShopkeeperHome';


export default function ShopkeeperAcDetails()
{
	
	let users=[];
	const [user,setUser]=useState({});
	var n=0;
	
	useEffect(()=>{
		users=JSON.parse(localStorage.getItem("users"));
		n=users.length;
		console.log(n);
		for(var i=0;i<n;i++)
		{
			var unm=JSON.parse(localStorage.getItem("userInfo")).username;
			var psw=JSON.parse(localStorage.getItem("userInfo")).password;
			if(users[i].username==unm && users[i].password==psw)
			{
				setUser(users[i]);
				
				break;
			}
		}
		console.log(user);
		console.log(user.uid);
		localStorage.setItem("user", JSON.stringify(user));
	}, [])



	return(
		
		<div className="container">
		   <ShopkeeperHome/>
		<div style={{ zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
		  
		   <br/>
		 
			<br/>
			<br/>
			 <center>
			 <h1><u>Shop Details</u></h1><br/>
			 <div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
			 <br/>
			 <form>
			    <div>
				   <h5 className="form-label col-md-2">Cid:</h5>
				   <span className="col-md-10">
					 <input type="text" name="cid" className="form-control" 
						 value={user.uid}/>
				   </span>
			   </div>
			   <div>
				   <h5 className="form-label col-md-2">First Name:</h5>
				   <span className="col-md-10">
					 <input type="text" name="fname" className="form-control" 
						 value={user.fname} 
					 />
				   </span>
			   </div>
			   <div>
				   <h5 className="form-label col-md-2">Last Name:</h5>
				   <span className="col-md-10">
					 <input type="text" name="lname" className="form-control" 
						 value={user.lname} 
					 />
				   </span>
			   </div>
			   <div>
				   <h5 className="form-label col-md-2 ">Email:</h5>
				   <span className="col-md-10">
					 <input type="email" name="email" className="form-control" 
					  value={user.email} 
					 />
				   </span>
			   </div>
						<div>
				   <h5 className="form-label col-md-2">Username:</h5>
				   <span className="col-md-10">
					 <input type="text" name="username" className="form-control" 
					   value={user.username}
					 />
				   </span>
			   </div>
			  
			   <div>
				   <h5 className="form-label col-md-2">Contact No.:</h5>
				   <span className="col-md-10">
					 <input type="text" name="contactno" className="form-control" 
						value={user.contactno}
					 />
				   </span>
			   </div>
			   <div>
				   <h5 className="form-label col-md-2">Address:</h5>
				   <textarea class="form-control" name="address" rows="2" value={user.address}></textarea>
			   </div>
				<br/>	  
	   </form>
	   
	  {/*<h3 style={{ color:"red"}}><i>{msg}</i></h3>*/}
   
	 </div> 
   </center>
   </div>
</div>
	);
}


