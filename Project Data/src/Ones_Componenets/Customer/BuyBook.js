import React from 'react';
import CustHome from './CustHome';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BuyBook(){
	const [pubNames,setPubNames]=useState([]);
	const [bNames,setBNames]=useState([]);
	const [oMsg,setOmsg]=useState("");
	const [delDate,setDelDate]=useState("");
    const [hideDate,setHideDate]=useState(true);
	let users=[];
	const [msg,setMsg]=useState("");
	const [user,setUser]=useState({});
	var p=0;
    const [reqPrices,setReqPrices]=useState([]);
    const [prices,setPrices]=useState([]);
    const [qtys,setQtys]=useState([]);
    const [bookTypes,setBookTypes]=useState([]);
	const [pubYears,setPubYears]=useState([]);
	const [bid,setBid]=useState([]);
	const [pubid,setPubid]=useState([]);
	const [hideF,setHideF]=useState(true);
	const [reqBks,setReqBks]=useState([]);
	const [courses,setCourses]=useState([]);
	const [publishers,setPublishers]=useState([]);
	const [semesters, setSemesters] = useState([]);

	const [state,setState]=useState({
		courseId:0,
		sem:0,
		pub:0,
		bType:""
	});

	

	const handleInput=(e)=>{
		setState((state)=>({
		   ...state,
		   [e.target.name]:e.target.value
		}))
	  } 

	const setBookId=(e)=>{
	    bookTypes.push(state.bType);
		console.log(e.target.value);
		if(e.target.checked)
		{
			p++;
			console.log(p);
		  bid.push(e.target.value);
		  pubid.push(state.pub);
		  for(var i=0;i<reqBks.length;i++)
		  {
			  if(reqBks[i].bid==e.target.value)
			  {
				bNames.push(reqBks[i].bname);
			  }

		  }
		  for(var j=0;j<publishers.length;j++)
		  {
			  if(publishers[j].pub_id==state.pub)
			  {
				  pubNames.push(publishers[j].pub_name);

				  break;
			  }
		  }
		  console.log(bid);
		} 
		var k=1; 
		for(var i=0;i<bid.length;i++)
		{
			for(var j=0;j<reqBks.length;j++)
			{
				if(reqBks[j].bid==bid[i] && reqBks[j].pubid==state.pub)
				{
					if(k%2==0)
					{
						continue;
					}
					else
					{
                        pubYears.push(reqBks[j].publish_year);
						k++;
					}
					
				}
			}
		}

	
		for(var m=0;m<bid.length;m++)
		{
			for(var l=0;l<reqBks.length;l++)
			{
				
				if(reqBks[l].bid==bid[m] && reqBks[l].pubid==state.pub && reqBks[l].book_type==bookTypes[m] && reqBks[l].publish_year==pubYears[m] )
				{				
						prices.push(reqBks[l].price);
				}
			}
		}

		

	}

	const setQuantity=(e)=>{
		qtys.push(e.target.value);
	}

	const setDeliveryDate=(e)=>{
		setDelDate(e.target.value);
		 console.log(delDate);
	}
	
	const showBids=()=>{
		console.log(bid);
		console.log(pubid);
		console.log(pubYears);
		console.log(qtys);
		console.log(bookTypes);
		console.log(prices);
		console.log(bNames);
		console.log(pubNames);
	  if(reqPrices.length==0)
	  {
		for(var q=prices.length-p;q<prices.length;q++)
		{
			console.log(q);
			reqPrices.push(prices[q]);
		}
		
	  }
	  console.log(reqPrices);
	  users=JSON.parse(localStorage.getItem("users"));
	  var n=users.length;
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
	  localStorage.setItem("buyingUser", JSON.stringify(user));
	}

	const sendToCart=()=>{

		const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				uid:user.uid,
				book_ids:bid,
				book_names:bNames,
				pub_years:pubYears,
				total_qtys:qtys,
				total_prices:reqPrices,
				pub_ids:pubid,
				pub_names:pubNames,
				book_types:bookTypes
			})
		}

		fetch("http://localhost:8080/addCartInfo",reqData)
        .then(resp=>resp.text())
        .then((data)=>{setMsg(data);
                       console.log(data);});
	
	}

	const confirmOrder=()=>{

		const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				uid:user.uid,
				del_date:delDate,
				book_ids:bid,
				pub_ids:pubid,
				book_types:bookTypes,
				pub_years:pubYears,
				total_prices:reqPrices,
				total_qtys:qtys
			})
		}

		fetch("http://localhost:8080/confirmOrder",reqData)
        .then(resp=>resp.text())
        .then((data)=>{setOmsg(data);
                       console.log(data);});

	}


	useEffect(()=>{
		fetch("http://localhost:8080/getallcourse")
		.then(resp=>resp.json())
		.then(data=>{setCourses(data)});	
	},[]);

	const getSemesters=(ev)=>{
		console.log(courses);
		console.log(ev.target.value)
		let  sems = 0;
		for(var i=0;i<courses.length;i++)
		{
			if(ev.target.value == courses[i].course_id)
			{
			   sems = courses[i].total_sem;
			   console.log(courses[i].total_sem);
				break;
			}
		}
		console.log(sems);
		let temp = [];
		for( i=0;i<sems;i++)
		{
			temp.push(i+1);				
		}
		setSemesters(temp);
		console.log(temp);
		console.log(semesters);

	}	

	const setDateFlag=()=>{
		setHideDate(false);
	}
	

	const getPublisher=()=>{

		fetch("http://localhost:8080/getallPub")
		.then(resp=>resp.json())
		.then(data=>{
			setPublishers(data);
			console.log(publishers);
		})}

	const submitData=(e)=>{
		console.log(state);
		e.preventDefault();
		const reqData={
		method:'POST',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			courseId:state.courseId,
			sem:state.sem,
			pub:state.pub,
	        bType:state.bType
		})
	}
fetch("http://localhost:8080/getStockDet",reqData)
.then(resp=>resp.json())
.then((data)=>{setReqBks(data);
   console.log(data);
   setHideF(false);
});
console.log(reqBks);
}	

const showBuyBooks=()=>{
	console.log(bid);
		console.log(pubid);
		console.log(pubYears);
		console.log(qtys);
		console.log(bookTypes);
		console.log(prices);
	  console.log(reqPrices);
	  console.log(user);
	  console.log(user.uid);
	  console.log(delDate);
}



	return(
		<div className="container">
		    <CustHome/>
			<div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
			
			<br/>
			<br/>
			<br/>
			<center>
		        <h1><u>Buy Book</u></h1><br/>
				<div style={{borderStyle:"solid", borderWidth:"2px",backgroundColor:"lightgrey",width:"1000px"}} >
				<br/>
				<form>
				  <div>
                      <h5 className="form-label col-md-2">Course:</h5>
					  <select className="form-select"  name="courseId" onChange={handleInput} onClick={getSemesters} >
                          <option>Select course</option>
						     {
								courses.map((course) => {
								 return(<option key={course.course_id} value={course.course_id}>{course.course_name}</option>)
								 })
							 }
                         
                      </select>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2" >Semester:</h5>
					  <select className="form-select"  name="sem"  onChange={handleInput} onClick={getPublisher} >
                          <option>Select semester</option>
						     {
								semesters.map((s) => {
								 return(<option key={s} value={s}>{s}</option>)
								 })
							 }
                      </select>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2" >Publisher:</h5>
					  <select className="form-select"  name="pub" onChange={handleInput}>
                          <option>Select publisher</option>
						     {
							     publishers.map((p) => {
								 return(<option key={p.pub_id} value={p.pub_id}>{p.pub_name}</option>)
								 })
							 }
                      </select>
                  </div>
				  <div>
                      <h5 className="form-label col-md-2" >Book Type:</h5>
					  <select className="form-select"  name="bType"  onChange={handleInput}>
                          <option>Select book type</option>
						  <option key={"New"} value={"New"}>{"New"}</option>
						  <option key={"Old"} value={"Old"}>{"Old"}</option>
                      </select>
                  </div>
				  <div className="form-group">
                       <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                       <input type="submit" value="Submit" class="btn btn-primary btn-lg btn-block" onClick={submitData}/>
                      </div>
                 </div>
          </form>
	    </div> 
    </center>
	<br/>
	<br/>
	<div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", width:"1125px"}} hidden={hideF} >
	 <br/>
	  <center>
	    <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
		    <tr>
			   <th>Select to Buy</th>
			   <th>Book Title</th>
			   <th>Publish Year</th>
			   <th>Unit Price</th>
			   <th>Quantity</th>
			</tr>
			{
				reqBks.map((rb)=>{
					return(
                        <tr>
                            <td><input type="checkbox" value={rb.bid} onChange={setBookId}/></td>
							<td>{rb.bname}</td>
							<td>{rb.publish_year}</td>
							<td>{rb.price}</td>
							<td><input type="text" name="qty" placeholder="Enter Quantity" onChange={setQuantity} /></td>
						</tr>
					);
				})
			}
		</table>
		<br/>
		<table style={{borderCollapse:"collapse"}} cellPadding={"5"}>
		   <tr>
               <td colSpan={"6"}><input type="button" value="Add to Cart" className="btn btn-lg btn-primary" onMouseOver={showBids} onClick={sendToCart}/></td> 
			   <td><input type="button" value="Buy Now" className="btn btn-lg btn-primary" onMouseOver={showBids} onClick={setDateFlag}/></td> 
		   </tr>
		</table>
		<br/>
		<h3 style={{ color:"red"}}><i>{msg}</i></h3>
		</center>		
	</div>	
	<br/>
	<br/>
	<div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", top:"1150px", width:"1125px"}} hidden={hideDate} >
		<center>
		   <br/>
            <h5 className="form-label col-md-2">Provide Delivery Date:</h5>
                <span className="col-md-10">
                    <input type="date" name="fname" className="form-control" placeholder="Select date"
                            onChange={setDeliveryDate} 
                        />
                </span>
				<br/>
				<div className="form-group">
                       <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                       <input type="button" value="Confirm Order" class="btn btn-primary btn-lg btn-block" onMouseOver={showBuyBooks} onClick={confirmOrder}/>
                      </div>
                 </div>
		  <br/> 
		  <h3 style={{ color:"red"}}><i>{oMsg}</i></h3>
		</center>
	</div>
	</div>	
</div>
	);

}

