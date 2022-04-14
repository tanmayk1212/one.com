import React from 'react';
import CustHome from './CustHome';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Orders(){

	const [detailsF,setDetailsF]=useState(true);
	const [hideF,setHideF]=useState(true);
	var users=[];
	var uid=0;
	const [orders,setOrders]=useState([]);
	const [order,setOrder]=useState([]);
	const [oD,setOd]=useState([]);
	//const [user,setUser]=useState({});
	
	useEffect(()=>{
		fetch("http://localhost:8080/getAllOrders")
				.then(resp=>resp.json())
				.then(data=>{setOrders(data)
				});
				
      
			
	}, []);

	const showData=()=>{
		console.log(orders);
		users=JSON.parse(localStorage.getItem("users"));
				console.log(users);
				var n=users.length;
				console.log(n);
				for(var i=0;i<n;i++)
				{
					var unm=JSON.parse(localStorage.getItem("userInfo")).username;
					var psw=JSON.parse(localStorage.getItem("userInfo")).password;
					
					if(users[i].username==unm && users[i].password==psw)
					{
						console.log(users[i].uid);
						uid=users[i].uid;
						break;
					}
				}		
	 
				console.log(uid);

				for(var j=0; j<orders.length;j++)
				{
					if(orders[j].u_id==uid)
					{
						if(order.length==orders.length)
						{
							break;
						}
						order.push(orders[j]);
					}
				}
                setHideF(false);
				console.log(order);
				
	}

	const setOrderDetail=(e)=>{
		console.log(e.target.id);
		for(var i=0;i<order.length;i++)
		{
			if(order[i].oid==e.target.id)
			{
				setOd(order[i].orderItems);
				break;
			}
		}
		
	}

	const setODFlag=()=>{
		setDetailsF(false);
		console.log(oD);
	}

	const hideDt=()=>{
		setDetailsF(true);
	}

	
	return(
		<div className="container">
			<div style={{  zIndex:"3", position:"absolute", left:"70px",top:"70px", width:"1000px", height:"0px"}}>
			</div>
			<br/>
			<br/>
			<br/>
			    <center>
		        <h1 ><u>My Orders</u></h1><br/>
				<input type="button" className="btn btn-lg btn-primary" value="View Orders" onClick={showData}/>
				 <br/> 
				 <br/> 
				  <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", width:"1000px"}} hidden={hideF} >
					<table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
					    <tr>
			               <th>Order ID</th>
			               <th>Order Date and Time</th>
			               <th>Delivery Date</th>
			               <th>Total Price</th>
			               <th>Order Status</th>
						   <th>Click Here</th>
			            </tr>
			     {
				   order.map((o)=>{
					  return(
                              <tr>
                                <td>{o.oid}</td>
							    <td>{o.order_date}</td>
							    <td>{o.delivery_date}</td>
							    <td>{o.total_price}</td>
							    <td>{o.order_status}</td>
								<td><input type="button" id={o.oid} value="View Details" className="btn btn-lg btn-info" defaultValue={o.oid} onClick={setODFlag} onMouseOver={setOrderDetail}/></td>
						      </tr>
					   );
				    })
			     }
		      </table>
            </div>
			<br/>
			<br/>
			<br/>
			<br/>
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
				   oD.map((o)=>{
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
		      </table>
			  <br/>
			  <input type="button" onClick={hideDt} value="Ok" className="btn btn-lg btn-primary"/>
            </div>
     
				
				</center>	
			  </div>

	);
}