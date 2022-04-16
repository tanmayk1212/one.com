import React from 'react';
import onesbg from 'E:/PRATIK CDAC/KNOW IT  ASSIGNMENTS/ONES_Project/onesreact/src/ones1.jpeg';

export default function Bgimage(){


	return(
		<div className="container">
            <span style={{borderStyle:"solid", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px",top:"0", width:"1125px", top:"70px", opacity:"0.7"}}>
		       <center>
			     <img src={onesbg} width={"1121px"} height={"800px"}/>
		       </center>
	       </span>

		</div>	
	);

}