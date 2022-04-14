
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import Register from './Ones_Componenets/Register';
import Login from './Ones_Componenets/Login';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Ones_Componenets/Home';
import CustHome from './Ones_Componenets/Customer/CustHome';
import CustAccountDet from './Ones_Componenets/Customer/CustAccountDet';
import UpdateCustAccount from './Ones_Componenets/Customer/UpdateCustAccount';
import BuyBook from './Ones_Componenets/Customer/BuyBook'
import SellBook from './Ones_Componenets/Customer/SellBook'
import RequestDetails from './Ones_Componenets/Customer/RequestDetails'
import ShopkeeperHome from './Ones_Componenets/Shopkeeper/ShopkeeperHome';
import CustSellRequest from './Ones_Componenets/Shopkeeper/CustSellRequest';
import GenerateReport from './Ones_Componenets/Shopkeeper/GenerateReport';
import Stock from './Ones_Componenets/Shopkeeper/Stock';
import Cart from './Ones_Componenets/Customer/Cart';
import Orders from './Ones_Componenets/Customer/Orders';
import CustOrders from './Ones_Componenets/Shopkeeper/CustOrders'
import ShopkeeperAcDetails from './Ones_Componenets/Shopkeeper/ShopkeeperAcDetails'

function App() {
 
  return (
    <div className="App">
      {/*<Register/>
      <Home />*/}
      <div className="container">
		     <div  style={{height:"50px", backgroundColor:"lightgreen", borderStyle:"solid", borderWidth:"2px"}}>
					<span style={{float:"right"}}>
					      <table style={{borderCollapse:"collapse"}} cellPadding={"5"}>
                    <tr>
							        <td><Link className="btn btn-link" to="/">Home</Link></td>
                      <td> <Link className="btn btn-link" to="/login">Login</Link></td>
								      <td> <Link className="btn btn-link" to="/register">Register</Link></td>
							     </tr> 
                 </table>
					  </span>	
           </div>  
		   </div>
       <Routes>
						<Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/accDetails" element={<CustAccountDet/>}/>
            <Route path="/custhome/*" element={<CustHome/>}/>
            <Route path="/shopkeeperhome/*" element={<ShopkeeperHome/>}/>
            <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
            <Route path="/buyBook/*" element={<BuyBook/>}/>
            <Route path="/sellBook/*" element={<SellBook/>}/>
            <Route path="/requestsdetails/*" element={<RequestDetails/>}/>
            <Route path="/custSellReq/*" element={<CustSellRequest/>}/>
            <Route path="/generateReport/*" element={<GenerateReport/>}/>
            <Route path="/viewStock/*" element={<Stock/>}/>
            <Route path="/orders/*" element={<Orders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/custOrders" element={<CustOrders/>}/>
    <Route path="/shopkpAccDetails" element={<ShopkeeperAcDetails/>}/>
     </Routes>     
    </div>
    
  );
}

export default App;
