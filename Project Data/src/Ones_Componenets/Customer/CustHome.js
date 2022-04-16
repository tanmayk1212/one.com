import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import App from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/App';
import Bgimage from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/Ones_Componenets/Bgimage';
import onesbg from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/ones1.jpeg';
import CustAccountDet from './CustAccountDet';
import UpdateCustAccount from './UpdateCustAccount';
import Orders from './Orders';
import BuyBook from './BuyBook';
import Cart from './Cart';
import SellBook from './SellBook';
import RequestDetails from './RequestDetails';



export default function CustHome(){
	const [user,setUser]=useState({});

	useEffect(()=>{
        fetch("http://localhost:8080/getAllu").then(resp=>resp.json()).then((data)=>{setUser(data);
	
		console.log(user);
	});
		
	}, []);

	const setArray=()=>{
		localStorage.setItem("users", JSON.stringify(user));
	}
	


	return(
	
		<div className="container">
		   <div style={{height:"70px", backgroundColor:"lightgreen", borderStyle:"solid", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px",top:"0", width:"1125px"}}>
				   <center>
				     <span>
					      <table style={{borderCollapse:"collapse"}} cellPadding={"10"}>
                                <tr>
							        <td><Link className="btn btn-link" to="/accDetails" onClick={setArray}>Account Details</Link></td>
									<td><Link className="btn btn-link" to="/updateCustAcc/*">Update Details</Link></td>
                                    <td><Link className="btn btn-link" to="/orderBook" onClick={setArray}>Buy Books</Link></td>
								    <td> <Link className="btn btn-link" to="/orders/*" onClick={setArray}>My Orders</Link></td>
									<td> <Link className="btn btn-link" to="/sellBook" onClick={setArray}>Sell Books</Link></td>
									<td> <Link className="btn btn-link" to="/requests" onClick={setArray}>My Selling Requests</Link></td>
									<td> <Link className="btn btn-link" to="/cart" onClick={setArray}>My Cart</Link></td>
									<td> <Link className="btn btn-link" to="/">Logout</Link></td>
							    </tr> 
                          </table>
					  </span>	
                   </center>
				   <Routes>
				      
					   <Route path="/logout" element={<App/>}/>
					   <Route path="/accDetails" element={<CustAccountDet/>}/>
					   <Route path="/orderBook" element={<BuyBook/>}/>
					   <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
					   <Route path="/orders/*" element={<Orders/>}/>
					   <Route path="/cart" element={<Cart/>}/>
					   <Route path="/sellBook" element={<SellBook/>}/>
					   <Route path="/requests" element={<RequestDetails/>}/>
                       {/*<Route path="/register" element={<Register/>}/>
                       <Route path="/custhome" element={<CustHome/>}/>
                       <Route path="/shopkeeperhome" element={<Home/>}/>*/}
                   </Routes>   
		   </div>
		  <Bgimage/>
		</div>
			
	);
}
<BrowserRouter>
   <CustHome/>
</BrowserRouter>	