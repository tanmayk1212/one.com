import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import CustOrders from './CustOrders';
import ShopkeeperAcDetails from './ShopkeeperAcDetails';
import UpdateShopkeeperAcDet from './UpdateShopkeeperAcDet';
import CustSellRequest from './CustSellRequest';
import GenerateReport from './GenerateReport';
import Stock from './Stock';
import App from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/App';
import Bgimage from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/Ones_Componenets/Bgimage';

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
									<td><Link className="btn btn-link" to="/updateDetails/*" onClick={setArray}>Update Details</Link></td>
									<td><Link className="btn btn-link" to="/viewStock" onClick={setArray}>View Stock</Link></td>
								    <td> <Link className="btn btn-link" to="/custOrders" onClick={setArray}>Customer Orders</Link></td>
									<td> <Link className="btn btn-link" to="/custSellReq" onClick={setArray}>Customer Selling Requests</Link></td>
									<td> <Link className="btn btn-link" to="/generateReport" onClick={setArray}>Generate Report</Link></td>
									<td> <Link className="btn btn-link" to="/">Logout</Link></td>
							    </tr> 
                          </table>
					  </span>	
                   </center>
				   <Routes>
				     <Route path="/logout" element={<App/>}/>
				     <Route path="/custOrders" element={<CustOrders/>}/>
					 <Route path="/shopkpAccDetails" element={<ShopkeeperAcDetails/>}/>
					 <Route path="/viewStock" element={<Stock/>}/>
					 <Route path="/custSellReq" element={<CustSellRequest/>}/>
					 <Route path="/generateReport" element={<GenerateReport/>}/>
					 <Route path="/updateDetails/*" element={<UpdateShopkeeperAcDet/>}/>
					 {/*  <Route path="/logout" element={<App/>}/>
					   <Route path="/accDetails" element={<CustAccountDet/>}/>
					   <Route path="/orderBook" element={<BuyBook/>}/>
					   <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
					   <Route path="/custhome/orders" element={<Orders/>}/>
                       {/*<Route path="/register" element={<Register/>}/>
                       <Route path="/custhome" element={<CustHome/>}/>
                       <Route path="/shopkeeperhome" element={<Home/>}/>*/}
                   </Routes>   
		   </div>
           <Bgimage/>
		</div>
			
	);

}

export default ShopkeeperHome;
<BrowserRouter>
   <ShopkeeperHome/>
</BrowserRouter>