import logo from './logo.svg';
import './App.css';
import 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Ones_Componenets/Register';
import Login from './Ones_Componenets/Login';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Ones_Componenets/Home';
import CustHome from './Ones_Componenets/Customer/CustHome';
import ShopkeeperHome from './Ones_Componenets/Shopkeeper/ShopkeeperHome';
import CustAccountDet from './Ones_Componenets/Customer/CustAccountDet';
import UpdateCustAccount from './Ones_Componenets/Customer/UpdateCustAccount';
import BuyBook from './Ones_Componenets/Customer/BuyBook';
import SellBook from './Ones_Componenets/Customer/SellBook';
import RequestDetails from './Ones_Componenets/Customer/RequestDetails';
import Orders from './Ones_Componenets/Customer/Orders';
import Cart from './Ones_Componenets/Customer/Cart';
import CustOrders from './Ones_Componenets/Shopkeeper/CustOrders';
import ShopkeeperAcDetails from './Ones_Componenets/Shopkeeper/ShopkeeperAcDetails';
import Stock from './Ones_Componenets/Shopkeeper/Stock';
import GenerateReport from './Ones_Componenets/Shopkeeper/GenerateReport';
import CustSellRequest from './Ones_Componenets/Shopkeeper/CustSellRequest';
import UpdateShopkeeperAcDet from './Ones_Componenets/Shopkeeper/UpdateShopkeeperAcDet';
import background from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/ones.png';
import oneslogo from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/oneslogo.jpg';
import { useNavigate } from 'react-router-dom';





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
            <Route path="/orderBook" element={<BuyBook/>}/>
            <Route path="/custHome/*" element={<CustHome/>}/>
            <Route path="/shopkeeperHome" element={<ShopkeeperHome/>}/>
            <Route path="/updateCustAcc/*" element={<UpdateCustAccount/>}/>
            <Route path="/orders/*" element={<Orders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/custOrders" element={<CustOrders/>}/>
            <Route path="/shopkpAccDetails" element={<ShopkeeperAcDetails/>}/>
            <Route path="/sellBook" element={<SellBook/>}/>
					  <Route path="/requests" element={<RequestDetails/>}/>
            <Route path="/viewStock" element={<Stock/>}/>
					 <Route path="/custSellReq" element={<CustSellRequest/>}/>
					 <Route path="/generateReport" element={<GenerateReport/>}/>
           <Route path="/updateDetails/*" element={<UpdateShopkeeperAcDet/>}/>
           
     </Routes>     
    </div>
    
  );
}

export default App;
