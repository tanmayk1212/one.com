import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import ShopkeeperHome from './ShopkeeperHome';


export default function CustOrders(){

	const [hideCust,setHideCust]=useState(true);
	var users=[];
	const [user,setUser]=useState({});
	const [uid,setUid]=useState(0);
	const [oid,setOid]=useState(0);
	const [o_id,setO_id]=useState(0);
	const [detailsF,setDetailsF]=useState(true);
	const [orders,setOrders]=useState([]);
	const [order,setOrder]=useState([]);
	const [msg,setMsg]=useState("");

	const [state,setState]=useState({
		status:""
	});

	

	const handleInput=(e)=>{
		setState((state)=>({
		   ...state,
		   [e.target.name]:e.target.value
		}));
	  }

	const setOrderId=(e)=>{
		setO_id(e.target.id);
		console.log(state.status);
		
	} 

	useEffect(()=>{
		fetch("http://localhost:8080/getAllOrders")
				.then(resp=>resp.json())
				.then(data=>{setOrders(data)
				});

	}, []);

	const setOrderDetail=(e)=>{
		console.log(e.target.id);
		console.log(orders);
		for(var i=0;i<orders.length;i++)
		{
			if(orders[i].oid==e.target.id)
			{
				setOrder(orders[i].orderItems);
				setUid(orders[i].u_id);
				break;
			}
		}
		
	}

	const setMmsg=()=>{
		setMsg("");
	}

	const setCust=(e)=>{

		console.log(e.target.id);
		users=JSON.parse(localStorage.getItem("users"));
				console.log(users);
				var n=users.length;
				console.log(n);
				for(var i=0;i<n;i++)
				{
					
					if(users[i].uid==e.target.id)
					{
						console.log(users[i]);
						setUser(users[i]);
						break;
					}
				}		
	}

	const showCust=()=>{
		setHideCust(false);
	}

	const setODFlag=()=>{
		console.log(order);
		console.log(uid);
		setDetailsF(false);
	}

	const hideDt=()=>{
		setDetailsF(true);
	}

	const hideCustD=()=>{
		setHideCust(true);
	}

	const updateStatus=(e)=>{
		e.preventDefault();
		const reqData={
		  method:'POST',
		  headers:{'Content-Type':'application/json'},
		  body:JSON.stringify({
	                    oid:o_id,
	                    status:state.status
		  })
	  }
	  fetch("http://localhost:8080/updateStatus",reqData).then(resp=>resp.text()).then((data)=>{setMsg(data);
	  alert(data);
	});
	  
	}

	return(
		<div className="container">
           <ShopkeeperHome/>
		   <div style={{zIndex:"3", position:"absolute", left:"125px",top:"70px", width:"1117px"}}>
             <br/>
			 <center>
		        <h1 ><u>Customer Orders</u></h1><br/>
				  <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute",left:"35px", width:"1050px"}} >
					<table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
					    <tr>
			               <th>Order ID</th>
			               <th>Order Date and Time</th>
			               <th>Delivery Date</th>
			               <th>Total Price</th>
			               <th>Order Status</th>
						   <th>Details</th>
						   <th>Update Status</th>
			            </tr>
			     {
				   orders.map((o)=>{
					  return(
                              <tr>
                                <td>{o.oid}</td>
							    <td>{o.order_date}</td>
							    <td>{o.delivery_date}</td>
							    <td>{o.total_price}</td>
							    <td>
								
					                <select className="form-select"  name="status" onChange={handleInput}>
                                        <option>{o.order_status}</option>
										<option>---Select one---</option>
						                <option key={"Pending"} value={"Pending"}>{"Pending"}</option>
						                <option key={"In Progress"} value={"In Progress"}>{"In Progress"}</option>
										<option key={"Dispatched"} value={"Dispatched"}>{"Dispatched"}</option>
										<option key={"Delivered"} value={"Delivered"}>{"Delivered"}</option>
                                    </select>
								
								</td>
								<td><input type="button" id={o.oid} value="View Details" className="btn btn-lg btn-info active" onMouseOver={setOrderDetail} onClick={setODFlag}/></td>
								<td><input type="button" id={o.oid} value="Update Status" className="btn btn-lg btn-info active" onMouseOver={setOrderId} onClick={updateStatus}/></td>
						      </tr>
					   );
				    })
			     }
		      </table>
            </div>
		</center>
		
        <center>
	       	<div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute",left:"35px", width:"1050px", top:"500px"}} hidden={detailsF} >
					<table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
					    <tr>
			               <th>Book Title</th>
			               <th>Publisher</th>
			               <th>Book Type</th>
			               <th>Publish Year</th>
			               <th>Unit Price</th>
						   <th>Quantity</th>
			            </tr>
			     {
				   order.map((o)=>{
					  return(
                              <tr>
                                <td>{o.b_id.book_title}</td>
							    <td>{o.p_id.pub_name}</td>
							    <td>{o.b_type}</td>
							    <td>{o.pb_year}</td>
							    <td>{o.price}</td>
								<td>{o.qty}</td>
						      </tr>
					   );
				    })
			     }
				 <br/>
		     
		      </table>
			  <br/>
			  <table>    
			       <tr>
                      <td colSpan={"6"}> <input type="button" onClick={hideDt} value="Ok" className="btn btn-lg btn-primary "/></td> 
			          <td><input type="button" value="Customer Details" className="btn btn-lg btn-primary" id={uid} onClick={showCust} onMouseOver={setCust} /></td> 
		          </tr>
			  </table>	  
            </div>
			</center>
			<div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute",left:"35px", width:"1050px", top:"900px"}} hidden={hideCust} >
		       	<table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
				    <tr>
						<th colSpan={"2"}>
						   <h2>
							Customer Details
						  </h2>
						</th>
					</tr>
					<tr>
						<td><b>Name:</b></td>
						<td>{user.fname+" "+user.lname}</td>
					</tr>
					<tr>
						<td><b>Address:</b></td>
						<td>{user.address}</td>
					</tr>
					<tr>
						<td><b>Email:</b></td>
						<td>{user.email}</td>
					</tr>
					<tr>
						<td><b>Contact No.:</b></td>
						<td>{user.contactno}</td>
					</tr>
					<tr>
                      <td colSpan={"2"}> <input type="button" onClick={hideCustD} value="Ok" className="btn btn-lg btn-dark active"/></td> 
			         
		          </tr>
				</table>
		    </div>
		   </div>
		</div>

	);
}