import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import App from 'E:/Study materials/Project/ones_react_frontend/ones-react/src/App';
import CustAccountDet from './CustAccountDet';
import UpdateCustAccount from './UpdateCustAccount';
import SellBook from './SellBook'
import RequestDetails from './RequestDetails';
import Orders from './Orders';
import BuyBook from './BuyBook';
import Cart from './Cart';



export default function CustHome(){
	const [user,setUser]=useState({});
	var n=0;
	useEffect(()=>{
		/*setUname(JSON.parse(localStorage.getItem("userInfo")).username);
	    setPass(JSON.parse(localStorage.getItem("userInfo")).password);           
		const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
               username:uname,
               password:pass
			})
		}*/
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
									<td><Link className="btn btn-link" to="/updateCustAcc/*" onClick={setArray}>Update Details</Link></td>
                                    <td> <Link className="btn btn-link" to="/buyBook" onClick={setArray}>Buy Books</Link></td>
								    <td> <Link className="btn btn-link" to="/custhome/orders" onClick={setArray}>My Orders</Link></td>
									<td> <Link className="btn btn-link" to="/sellBook" onClick={setArray}>Sell Books</Link></td>
									<td> <Link className="btn btn-link" to="/requestsdetails" onClick={setArray}>My Selling Requests</Link></td>
									<td> <Link className="btn btn-link" to="/cart" onClick={setArray}>My Cart</Link></td>
									<td> <Link className="btn btn-link" to="/" onClick={setArray}>Logout</Link></td>
							    </tr> 
                          </table>
					  </span>	
                   </center>
				   <Routes>
				      
					   <Route path="/logout" element={<App/>}/>
					   <Route path="/accDetails" element={<CustAccountDet/>}/>
					   <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
					   <Route path="/custhome/orders" element={<Orders/>}/>
					   <Route path="/buyBook" element={<BuyBook/>}/>
					   <Route path="/sellBook/*" element={<SellBook/>}/>
					   <Route path="/requestsdetails/*" element={<RequestDetails/>}/>
					   <Route path="/orderBook" element={<BuyBook/>}/>
					   <Route path="/orders/*" element={<Orders/>}/>
					   <Route path="/cart" element={<Cart/>}/>
                       {/*<Route path="/register" element={<Register/>}/>
                       <Route path="/custhome" element={<CustHome/>}/>
                       <Route path="/shopkeeperhome" element={<Home/>}/>*/}
                   </Routes>   
		   </div>

		</div>
			
	);
}
<BrowserRouter>
   <CustHome/>
</BrowserRouter>	