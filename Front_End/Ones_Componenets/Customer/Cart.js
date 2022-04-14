import React from 'react';
import CustHome from './CustHome';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart(){
	const [delDate,setDelDate]=useState("");
	const [prices,setPrices]=useState([]);
    const [qtys,setQtys]=useState([]);
	const [bookTypes,setBookTypes]=useState([]);
	const [pubYears,setPubYears]=useState([]);
	const [srnos,setSrnos]=useState([]);
	const [pubid,setPubid]=useState([]);
	const [bid,setBid]=useState([]);
	var users=[];
	const [uid,setUid]=useState(0);
	const [carts,setCarts]=useState([]);
	const [cart,setCart]=useState({});
	const [cartInf,setCartInf]=useState([]);
	const [hideF,setHideF]=useState(true);
	const [hideDate,setHideDate]=useState(true);


	useEffect(()=>{
		fetch("http://localhost:8080/getAllCarts")
				.then(resp=>resp.json())
				.then(data=>{setCarts(data)
				});
		
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
				setUid(users[i].uid);
				break;
			}
		}	
	}, []);

	const showData=()=>{
		
		console.log(uid);
		console.log(carts);

		for(var i=0;i<carts.length;i++)
		{
			if(carts[i].user_id==uid)
			{
				console.log(carts[i]);
				if(cart.length==carts.length)
				{
					break;
				}
				setCart(carts[i]);
			}	
		}


		
		

	}



	const setCartInfo=()=>{

		console.log(cart);
         setCartInf(cart.cartInf);
	
	}


	const showCartInfo=()=>{
		console.log(cartInf);
		if(cartInf.length==0)
		{
			alert("Your cart is empty");
			setHideF(true);
		}
		else{
            setHideF(false);
		}
		
	}

	const showSrno=(e)=>{
		console.log(e.target.id);
	}

	const deleteInfo=(e)=>{
	
		fetch("http://localhost:8080/deleteFromCartinfo?sno="+e.target.id)
						.then(resp=>resp.text())
						.then(data=>{alert(data);
							setHideF(true);
				    });
	    for(var i=0;i<cartInf.length;i++)
		{
			if(cartInf[i].srno==e.target.id)
			{
				cartInf.splice(i,1);
			  if(cartInf.length==0)
				{
					fetch("http://localhost:8080/deleteCart?cid="+cart.cart_id)
					.then(resp=>resp.text())
					.then((data)=>{console.log(data);
				   });
				}	
			}
		}
		console.log(cartInf);	

	}

	const setBookId=(e)=>{
		console.log(e.target.value);
		if(e.target.checked)
		{
			
		  bid.push(e.target.value);
		 
		  for(var i=0;i<cartInf.length;i++)
		  {
			  if(cartInf[i].book_id.bid==e.target.value)
			  {
				pubid.push(cartInf[i].pubid.pub_id);
				bookTypes.push(cartInf[i].book_type);
				pubYears.push(cartInf[i].pub_year);
				prices.push(cartInf[i].price);
				qtys.push(cartInf[i].qty);
				srnos.push(cartInf[i].srno);
			  }

		  }
		}  
	}



	const showBids=()=>{
		console.log(uid);
		console.log(bid);
		console.log(pubid);
		console.log(bookTypes);
		console.log(pubYears);
		console.log(prices);
		console.log(qtys);
		console.log(srnos);
	}
	
	const setDateFlag=()=>{
		setHideDate(false);
	}	
	const setDeliveryDate=(e)=>{
		setDelDate(e.target.value);
		 console.log(delDate);
	}

	const showBuyBooks=()=>{
		console.log(uid);
		console.log(bid);
		console.log(pubid);
		console.log(bookTypes);
		console.log(pubYears);
		console.log(prices);
		console.log(qtys);
		console.log(srnos);
		console.log(delDate);
		console.log(cart.cart_id);
	}

	const confirmOrder=()=>{
		for(var i=0;i<cartInf.length;i++)
		{
			for(var j=0;j<bid.length;j++)
			{
				if(cartInf[i].book_id.bid==parseInt(bid[j]))
				{
					cartInf.splice(i,1);
				}
			}
		}
		const reqData={
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				uid:uid,
				del_date:delDate,
				book_ids:bid,
				pub_ids:pubid,
				book_types:bookTypes,
				pub_years:pubYears,
				total_prices:prices,
				total_qtys:qtys,
				srnos:srnos,
				cart_id:cart.cart_id
			})
		}

		fetch("http://localhost:8080/confirmOFromCart",reqData)
        .then(resp=>resp.text())
        .then((data)=>{alert(data);
             setHideF(true);
			 setHideDate(true);
          });

		if(cartInf.length==0)  
		{
			fetch("http://localhost:8080/deleteCart?cid="+cart.cart_id)
           .then(resp=>resp.text())
           .then((data)=>{console.log(data);
          });
		}

	}

	return(
       <div className="container">
           <CustHome/>
			<div style={{zIndex:"3", position:"absolute", left:"125px",top:"70px", width:"1117px"}}>
            <br/>
			<br/>
			<br/>
			    <center>
				   <h1 onMouseOver={showData}><u>My Cart</u></h1><br/>
				   <input type="button" className="btn btn-lg btn-primary" value="View Cart"  onMouseOver={setCartInfo} onClick={showCartInfo}/>
				  
				    <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute",left:"15px", width:"1080px"}} hidden={hideF}>
					  <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"}>
                         <tr>
						   <th>Select To Buy</th>
			               <th>Book Title</th>
						   <th>Book Type</th>
						   <th>Publisher</th>
			               <th>Publish Year</th>
			               <th>Unit Price</th>
			               <th>Quantity</th>
						   <th>Delete from Cart</th>
						 </tr>
						 {
				             cartInf.map((rb)=>{
					              return(
                                         <tr>
                                            <td><input type="checkbox" value={rb.book_id.bid} onChange={setBookId}/></td>{/*onChange={setBookId}*/ }
							                <td>{rb.book_id.book_title}</td>
											<td>{rb.book_type}</td>
											<td>{rb.pubid.pub_name}</td>
							                <td>{rb.pub_year}</td>
							                <td>{rb.price}</td>
							                <td><input type="text" name="qty" value={rb.qty} /></td>{/*onChange={setQuantity} */ }
                                            <td><input type="button"  value="Delete" className="btn btn-lg btn-dark active" id={rb.srno} onMouseOver={showSrno} onClick={deleteInfo} />  </td>
						                </tr>
					                    );
				                    })
			            }
					     
					  </table>
					  <br/>
					  <input type="button" value="Buy Now" className="btn btn-lg btn-primary" onMouseOver={showBids} onClick={setDateFlag}/>{/* onClick={setDateFlag} onMouseOver={showBids} */ }
                    </div>
					<br/>
	                <br/>
	                <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"15px", top:"800px", width:"1080px"}} hidden={hideDate} >
		              <center>
		              <br/>
                      <h5 className="form-label col-md-2">Provide Delivery Date:</h5>
                        <span className="col-md-10">
                             <input type="date" name="fname" className="form-control" placeholder="Select date"
                             onChange={setDeliveryDate} 
                             />
                        </span>
				      <br/>
				      <div className="form-group">
                          <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                             <input type="button" value="Confirm Order" class="btn btn-primary btn-lg btn-block" onMouseOver={showBuyBooks} onClick={confirmOrder}/>
                          </div>
                       </div>
		           <br/> 
		</center>
	</div>	
				</center>
			</div>
	   </div>


	);
}
