
import React from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { validPassword } from './Regexp.js';
import { useNavigate } from 'react-router-dom';

export default function Register()
{
  let navigate=useNavigate();
	const [seq_qs,setSeq_qs]=useState([]);
  const [msg,setMsg]=useState("");
  const [remsg,setRemsg]=useState("");
	const [state,setState]=useState({
		fname:"",
		lname:"",
		email:"",
		username:"",
		password:"",
		qid:0,
		answer:"",
		contactno:"",
		address:"",
	});
	
 	useEffect(()=>{
			fetch("http://localhost:8080/getAllsq").then(resp=>resp.json()).then(data=>setSeq_qs(data));
		},[]);

    const handleInput=(e)=>{
      setState((state)=>({
         ...state,
         [e.target.name]:e.target.value
         
      }));
    }

    const beginAlert=()=>{
      if(state.password.length===0)
      alert("The password should consist of at least 8 and at most 16 characters consisting a numeric figure (0-9), a capital alphabet (A-Z), a small alphabet (a-z), and a special character (@,$,!,%,*,?,&)");
    }

    const checkPass=()=>{
      if (validPassword.test(state.password)) 
      {
        setMsg("Entered password is valid");
        
      }
      else
      {
        setMsg("Invalid password format");
      }
    }

    const submitData=(e)=>{
       e.preventDefault();
      
		const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
        fname:state.fname,
        lname:state.lname,
        email:state.email,
        username:state.username,
        password:state.password,
        sec_q:state.qid,
        answer:state.answer,
        contactno:state.contactno,
        address:state.address
				
			})
		}
    fetch("http://localhost:8080/saveUser",reqData)
    .then(resp=>resp.text())
    .then((data)=>{setRemsg(data)});
		 alert("Customer registered successfully");
     navigate('/login');
    }

   

	return(
		<div className="container" style={{ backgroundColor:"lightgreen",borderStyle:"solid", borderWidth:"2px"}}>
		   <center>
		        <h1><u>Customer Registration</u></h1><br/>
				<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
				<br/>
				<form>
				  <div>
                      <h5 className="form-label col-md-2">First Name:</h5>
                      <span className="col-md-10">
                        <input type="text" name="fname" className="form-control" placeholder="Enter first name"
                            onChange={handleInput} value={state.fname} 
                        />
                      </span>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2">Last Name:</h5>
                      <span className="col-md-10">
                        <input type="text" name="lname" className="form-control" placeholder="Enter last name"
                           onChange={handleInput} value={state.lname} 
                        />
                      </span>
                  </div>
                  <div>
                      <h5 className="form-label col-md-2 ">Email:</h5>
                      <span className="col-md-10">
                        <input type="email" name="email" className="form-control" placeholder="Enter email"
                          onChange={handleInput} value={state.email} 
                        />
                      </span>
                  </div>
				           <div>
                      <h5 className="form-label col-md-2">Username:</h5>
                      <span className="col-md-10">
                        <input type="text" name="username" className="form-control" placeholder="Enter username"
                          onChange={handleInput} value={state.username} 
                        />
                      </span>
                  </div>
				          <div>
                      <h5 className="form-label col-md-2">Password:</h5>
                      <span className="col-md-10">
                        <input type="password" name="password" value={state.password} className="form-control" placeholder="Enter password" minLength={"8"} maxLength={"16"}
                          onClick={beginAlert}  onChange={handleInput} onMouseOut={checkPass}
                        />
                      </span>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2">Security Question:</h5>
					  <select className="form-select"  name="qid"  onChange={handleInput} >
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
                           onChange={handleInput} value={state.answer}
                        />
                      </span>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2">Contact No.:</h5>
                      <span className="col-md-10">
                        <input type="text" name="contactno" className="form-control" placeholder="Enter contact no."
                           onChange={handleInput} value={state.number}
                        />
                      </span>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2">Address:</h5>
					  <textarea class="form-control" name="address" rows="2" placeholder="Enter address"  onChange={handleInput} value={state.address}></textarea>
                  </div>
				         <div className="form-group">
                      <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                      <input type="submit" value="Register" class="btn btn-primary btn-lg btn-block" onClick={submitData}/>
                      </div>
                 </div>

          </form>
          
          <h3 style={{ color:"red"}}><i>{msg}</i></h3> 
	    </div> 
    </center>
 
</div>
	);
}