import React from 'react';
import { useEffect,useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopkeeperHome from './ShopkeeperHome';
import { validPassword } from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/Ones_Componenets/Regexp';

export default function UpdateShopkeeperAcDet(){
	var users=[];
	var n=0;
	const [user,setUser]=useState({});
	const [seq_qs,setSeq_qs]=useState([]);
	const [hideF,setHideF]=useState(true);
	const [password,setPassword]=useState("");

	
	useEffect(()=>{
		fetch("http://localhost:8080/getAllsq").then(resp=>resp.json()).then(data=>setSeq_qs(data));
	},[]);
    

	const [state,setState]=useState({
		question:0,
		answer:"",
		password:"",
		contactno:"",
		address:""
	});

	const handleInput=(e)=>{
		
		setState((state)=>({
		   ...state,
		   [e.target.name]:e.target.value 
		}));
	  }

	 const setData=()=>{
		users=JSON.parse(localStorage.getItem("users"));
		n=users.length;
		console.log(n);
		for(var i=0;i<n;i++)
		{
			var unm=JSON.parse(localStorage.getItem("userInfo")).username;
			var psw=JSON.parse(localStorage.getItem("userInfo")).password;
			if(users[i].username==unm && users[i].password==psw)
			{
				console.log(users[i])
				setUser(users[i]);
				
				break;
			}
		}

	 } 

	 const beginAlert=()=>{
		if(state.password.length===0)
		alert("The password should consist of at least 8 and at most 16 characters consisting a numeric figure (0-9), a capital alphabet (A-Z), a small alphabet (a-z), and a special character (@,$,!,%,*,?,&)");
	  }

	 const showData=()=>{
		 if(user.sec_q.qid==state.question && user.answer==state.answer)
		 {
			 setHideF(false);
		 }
		 else{
			 alert("Wrong security question or answer entered");
		 }
		 
	} 

	const checkPass=()=>{
		if (validPassword.test(state.password)) 
		{
		  alert("Entered password is valid");
		  
		}
		else
		{
		  alert("Invalid password format");
		}
	  }
  

	return(
		<div className="container">
		<ShopkeeperHome/>
		<div className="container" style={{ zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
	
		<br/>
	  
		 
		  <center>
		  <h1><u>Update Details</u></h1><br/>
		  <div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
		  <br/>
		  <form>
		       <div>
                 <h5 className="form-label col-md-2">Security Question:</h5>
				 <select className="form-select"  name="question"  onChange={handleInput} >
                          <option>Select question</option>
						     {
								 seq_qs.map((seq_q) => {
								 return(<option key={seq_q.qid} value={seq_q.qid}>{seq_q.question}</option>)
								 })
							 }
                         
                      </select>
                </div>
				<div>
                    <h5 className="form-label col-md-2">Answer:</h5>
                    <span className="col-md-10">
                        <input type="text" name="answer" className="form-control" placeholder="Enter answer"
                            value={state.answer} onChange={handleInput}
                        />
                    </span>
                </div>
				<div className="form-group">
                      <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                      <input type="button" value="Enter" class="btn btn-primary btn-lg btn-block" onClick={showData} onMouseOver={setData}/>
                      </div>
                 </div>
			 </form> 
		</div>
		<br/>	
		<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} hidden={hideF} >
		  <br/> 
			 <form>
			<div>
				<h5 className="form-label col-md-2">Cid:</h5>
				<span className="col-md-10">
				  <input type="text" name="cid" className="form-control" 
					  value={user.uid} readOnly={true}/>
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2">First Name:</h5>
				<span className="col-md-10">
				  <input type="text" name="fname" className="form-control" 
					  value={user.fname} readOnly={true}
				  />
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2">Last Name:</h5>
				<span className="col-md-10">
				  <input type="text" name="lname" className="form-control" 
					  value={user.lname} readOnly={true}
				  />
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2 ">Email:</h5>
				<span className="col-md-10">
				  <input type="email" name="email" className="form-control" 
				   value={user.email} readOnly={true}
				  />
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2">Username:</h5>
				<span className="col-md-10">
				  <input type="text" name="username" className="form-control" 
					value={user.username} readOnly={true}
				  />
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2">Password:</h5>
				<span className="col-md-10">
				  <input type="password" name="password" className="form-control" 
					value={user.password} onChange={(e)=>{setPassword(e.target.value)}}  onClick={beginAlert}  onMouseOut={checkPass}
				  />
				</span>
			</div>
			
		   
			<div>
				<h5 className="form-label col-md-2">Contact No.:</h5>
				<span className="col-md-10">
				  <input type="text" name="contactno" className="form-control" 
					 value={user.contactno} onChange={handleInput}
				  />
				</span>
			</div>
			<div>
				<h5 className="form-label col-md-2">Address:</h5>
				<textarea class="form-control" name="address" rows="2" value={user.address} onChange={handleInput}></textarea>
			</div>
			<div className="form-group">
                      <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                      <input type="button" value="Update" class="btn btn-primary btn-lg btn-block" />
                      </div>
          </div>  
	</form>
	
   {/*<h3 style={{ color:"red"}}><i>{msg}</i></h3> */}
  </div> 
</center>
</div>
</div>
		
	);

}

 