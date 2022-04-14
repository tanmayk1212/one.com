import React from 'react';
import CustHome from './CustHome';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function BuyBook(){

	let navigate=useNavigate();
	let users=[];
    var n=0;
    const [user,setUser]=useState([]);
	const [courses,setCourses]=useState([]);
	const [publishers,setPublishers]=useState([]);
	const [flag,setFlag]=useState(true);
    const [book,setbooks]=useState([]);
	 const [cid, setCid] = useState(0);
	const [allsems, setAllsems] = useState([]);
   const [buying_price,setprice]=useState();
   const [buying_year,setbuyingyear]=useState();
   const [publish_year,setpublishyear]=useState();
   const [sellflag,setsellflag]=useState(true);
   const [pub_id,setpub_id]=useState();


   const[userid,setuid]=useState();
   const [bookid,setbookid] = useState({ 
	      bid:0
   });
   const [request_id,setrequest_id]= useState({
	userid:0,
	request_date:0
   });

const [state,setState]=useState({
					cid:0,
					semester:0
					
	});
const [sellstate, setsellstate]=useState({
	buying_price:0,
	buying_year:0,
	publish_year:0,
    pub_id:0
});


const handleInput=(e)=>{
		setState((state)=>({
		   ...state,
		   [e.target.name]:e.target.value,
		  
		}));
	  }
const handleInputsell=(e)=>{
		setsellstate((sellstate)=>({
		   ...sellstate,
		   [e.target.name]:e.target.value,
		}));
	  }

useEffect(()=>{
	users=JSON.parse(localStorage.getItem("users"));
	n=users.length;
	var unm=JSON.parse(localStorage.getItem("userInfo")).username;
	var psw=JSON.parse(localStorage.getItem("userInfo")).password;
	for(var i=0;i<n;i++)
	{
		
		if(users[i].username===unm && users[i].password===psw)
		{
			console.log(unm);
			setUser(users[i]);
			console.log(user);
			break;
		}
	}
	
		fetch("http://localhost:8080/getallcourse").then(resp=>resp.json()).then(data=>{setCourses(data)});
		
	},[]);
useEffect(()=>{
	
	fetch("http://localhost:8080/getallPub")
		.then(resp=>resp.json())
		.then((data)=>{
			setPublishers(data);	
		});
},[]);

const handleCid = (ev)  =>{
					console.log(courses)
					setCid(ev.target.value);
					console.log(ev.target.value)
					let  sems = 0;
					for(var i=0;i<courses.length;i++)
				{
					console.log(ev.target.value);
					if(ev.target.value == courses[i].course_id)
					{
						sems = courses[i].total_sem;
						console.log(courses[i].total_sem);
						break;
					}
					

				}
				console.log(sems)
				let temp = allsems;
				for( i=0;i<sems;i++)
				{
					temp.push(i+1);				
				}
				setAllsems(temp);
				console.log(temp);
				console.log(allsems);

				localStorage.setItem("selluser", JSON.stringify(user));
	
				

  }
const setReq=(ev)=>{
	setsellflag(false);
	console.log(user);
	let dt = new Date().toLocaleDateString();
	console.log(dt);
	setuid(user.uid);
	//console.log(user.uid);
	setrequest_id({userid:user.uid,request_date:dt});
	console.log(request_id);
	setbookid({bid:ev.target.value});

}	
	



const submitData=(e)=>{
			console.log(state);
			e.preventDefault();
			const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				cid:state.cid,
				semester:state.semester

			})
		}
	fetch("http://localhost:8080/getsellbook",reqData)
	.then(resp=>resp.json())
	.then((data)=>{setbooks(data);
	   
	});
	
}
const SubmitReq=(e)=>{
	console.log(sellstate);
	console.log(request_id);
	console.log(bookid);
						e.preventDefault();
						const reqData={
						method:'POST',
						headers:{'Content-Type':'application/json'},
						body:JSON.stringify({
							bid:bookid,
							buying_price:sellstate.buying_price,
							buying_year:sellstate.buying_year,
							pub_id:sellstate.pub_id,
							publish_year:sellstate.publish_year,
							request_id:request_id
						})
					}
					fetch("http://localhost:8080/saverequest",reqData)
					.then(resp=>resp.json())
					.then((data)=>{setbooks(data);});
					alert("book submit.")
					navigate('/requestsdetails');
	}


const	getbook=()=>
	{
		setFlag(false);
		console.log(book);
		console.log(publishers);
		
	}     
	
const showdata=(ev)=>{
	console.log(state.bid);
	console.log(state.request_id);

}
  
	return(
		<div className="container">
		    <CustHome/>
			<div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
			</div>
			<br/>
			<br/>
			<br/>
			<center>
		        <h1><u>Sell Book</u></h1><br/>
				<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
				<br/>
				<form>
				  <div>
                      <h5 className="form-label col-md-2">Course:</h5>
					  <select className="form-select"  name="cid"  onChange={handleCid} onClick={handleInput}  >
                          <option value="0">Select course</option>
						     {
								courses.map((v) => {
								 return(<option key={v.course_id} value={v.course_id}  >{v.course_name}</option>)
								 })
							 }

                         
                      </select>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2" >Semester:</h5>
					  <select className="form-select"  name="semester"  onChange={handleInput}  >
					  <option>Select semester</option>
						     {
								allsems.map((s) => {
								 return(<option key={s} value={s}>{s}</option>)
								 })
							 }
                      </select>
                  </div>
				 
				  <div className="form-group">
                       <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                       <input type="submit" value="Submit" className="btn btn-primary btn-lg btn-block" onClick={submitData}  />{' '}
					   <input type="button" value="View book list" className="btn btn-primary btn-lg btn-block" onClick={getbook}   />
					  </div>
                 </div>
          </form>
	    </div>
         <br/>
		 <br/>
         <br/>
		<div hidden={flag}>
		<h1><u> Book Details </u></h1><br/>
		<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} ></div>
		            
	   </div> 
    </center>
	<br/>
	<br/>
	<div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px", width:"1125px"}} hidden={flag} >
	 <br/>
	  <center>
		 
	    <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}  >
		    <tr>
			   <th>Select to sell</th>
			   <th>Book Title</th>
			   <th>Publisher</th>
			   <th>Buying Price</th>
			   <th>Buying Year</th>
			   <th>Publish Year</th>
			</tr>
			{
				book.map((rb)=>{
					return(
                        <tr>
                            <td><input type="radio" name="bookid" key={bookid} value={rb.bid} onClick={setReq}   /></td>
							<td >{rb.book_title}</td>
							<td>
												<div>
										<select className="form-select"  name="pub_id"  onChange={handleInputsell}  >
										<option>Select publisher</option>
												{
													publishers.map((s) => {
													return(<option key={s.pub_id} value={s.pub_id}>{s.pub_name}</option>)
													})
												}
										</select>
									</div>

							</td>
							<td><input type="text" name="buying_price" key={buying_price} value={buying_price} onChange={handleInputsell}   /></td>
							<td><input type="date" name="buying_year" key={buying_year} value={buying_year} onChange={handleInputsell}  /></td>
							<td><input type="date" name="publish_year" key={publish_year} value={publish_year} onChange={handleInputsell}  /></td>
							
							<td hidden={sellflag}><input type="submit" value="Sell Now" className="btn btn-lg btn-primary" onClick={SubmitReq} onMouseOver={showdata}  /></td>
						</tr>
					);
				})
			}
		</table>
		<br/>
		<table style={{borderCollapse:"collapse"}} cellPadding={"5"}>
		   <tr>
               {/*<td colSpan={"6"}><input type="submit" value="Sell Now" className="btn btn-lg btn-primary" onClick={SubmitReq}/></td>*/} 
		   </tr>
		</table>
		</center>		
	</div>			
	
		</div>
		
	);

}

