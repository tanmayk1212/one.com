import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import App from 'E:/Study materials/Project/ones_react_frontend/ones-react/src/App';
import CustSellRequest from './CustSellRequest';
import GenerateReport from './GenerateReport';
import Stock from './Stock';

function ShopkeeperHome(){
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
							        <td><Link className="btn btn-link" to="/shopkpAccDetails" onClick={setArray}>Account Details</Link></td>
									<td><Link className="btn btn-link" to="/updateDetails">Update Details</Link></td>
									<td><Link className="btn btn-link" to="/viewStock">View Stock</Link></td>
								    <td> <Link className="btn btn-link" to="/custOrders">Customer Orders</Link></td>
									<td> <Link className="btn btn-link" to="/custSellReq">Customer Selling Requests</Link></td>
									<td> <Link className="btn btn-link" to="/generateReport">Generate Report</Link></td>
									<td> <Link className="btn btn-link" to="/">Logout</Link></td>
							    </tr> 
                          </table>
					  </span>	
                   </center>
				   <Routes>
				      
					   <Route path="/logout" element={<App/>}/>
					   <Route path="/custSellReq" element={<CustSellRequest/>}/>
					   <Route path="/generateReport/*" element={<GenerateReport/>}/>
					   <Route path="/viewStock/*" element={<Stock/>}/>
					 {/*  <Route path="/accDetails" element={<CustAccountDet/>}/>
					   <Route path="/orderBook" element={<BuyBook/>}/>
					   <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
					   <Route path="/custhome/orders" element={<Orders/>}/>
	*/}
                   </Routes>   
		   </div>

		</div>
			
	);

}

export default ShopkeeperHome;
<BrowserRouter>
   <ShopkeeperHome/>
</BrowserRouter>