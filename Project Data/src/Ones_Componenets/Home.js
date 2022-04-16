import React from 'react';
import background from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/ones.png';
import oneslogo from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/oneslogo.jpg';

export default function Home(){

	
	return(
		<div className="container">
		   <div  style={{height:"100px", backgroundColor:"lightgreen", borderStyle:"solid", borderWidth:"2px"}}>
		            <span style={{float:"left"}}>
				      <img src={oneslogo} width={"100"} height={"80"} style={{borderStyle:"solid", borderWidth:"1px"}}/>
				      <span style={{color:"mediumslateblue", fontFamily:"-moz-initial", fontSize:"50px"}}><i>ONES.com</i></span> 
					</span> 
					 
		   </div>
		    <div style={{height:"20px", backgroundColor:"goldenrod"}}>
			</div>
			<div style={{height:"800px"}}>
			       <img src={background} style={{borderStyle:"solid", borderWidth:"2px", backgroundColor:"lightgreen"}} width={"1117"} height={"550"}/>
				  
			</div>
			<div style={{ backgroundColor:"lightyellow", width:"800px", height:"500px", zIndex:"3", position:"absolute", left:"275px", top:"200px", opacity:"0.6"}}>
			    <center>
				   <span >
				       <span style={{color:"red", fontFamily:"-moz-initial", fontSize:"50px"}}><i><u> Old and New Ecommerce System</u></i></span>  
				   </span><br/>
				   <p style={{fontFamily:"-moz-initial", fontSize:"35px"}}>
					  Buy new or old books and Sell used books online to the shops.  No need to visit shops for these transactions.
					  Associated shops will give you appropriate return amount after selling books to them. You can provide a delivery date according to your convenience at the time of placing the order for buying books.
				   </p><br/>
				   <p style={{color:"red", fontFamily:"-moz-initial", fontSize:"30px"}}><i><u>Please login to Buy or Sell books</u></i></p>
				</center>  
			</div>
		</div>
		

	);
}