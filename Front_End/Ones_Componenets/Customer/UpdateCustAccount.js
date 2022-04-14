import React from 'react';
import { useEffect,useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustHome from './CustHome';

function UpdateCustAccount(){
	const [user,setUser]=useState({});
	
	useEffect(()=>{
		setUser(JSON.parse(localStorage.getItem("user")));
		
	})
    

	const [state,setState]=useState({
		question:user.sec_q.question,
		answer:""
	});

	const handleInput=(e)=>{
		
		setState((state)=>({
		   ...state,
		   [e.target.name]:e.target.value 
		}));
	  }
  

	return(
		<div className="container">
		<CustHome/>
		<div className="container" style={{ zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
		</div>
		<br/>
	  
		 <br/>
		 <br/>
		  <center>
		  <h1><u>Update Details</u></h1><br/>
		  <div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
		  <br/>
		  <form>
		       <div>
                 <h5 className="form-label col-md-2">Security Question:</h5>
				 <span className="col-md-10">
                        <input type="text" name="question" className="form-control" placeholder="Enter question"
                            value={state.question} onChange={handleInput}
                        />
                    </span>
                </div>
				<div>
                    <h5 className="form-label col-md-2">Answer:</h5>
                    <span className="col-md-10">
                        <input type="text" name="answer" className="form-control" placeholder="Enter answer"
                            value={state.answer} onChange={handleInput}
                        />
                    </span>
                </div>
			{/*<div>
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
			</div>*/}
			 <br/>	  
	</form>
	
   {/*<h3 style={{ color:"red"}}><i>{msg}</i></h3> */}
  </div> 
</center>

</div>
		
	);

}

export default UpdateCustAccount;