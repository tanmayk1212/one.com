import React from 'react'
import CustHome from './CustHome';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RequestDetails(){

    let users=[];
    var n=0;
    const [user,setUser]=useState([]);
    const [publishers,setPublishers]=useState([]);
    const [request,setrequest]=useState([]);
    const [pubname,setpubname]=useState([]);
   
    
    useEffect(()=>{
        users=JSON.parse(localStorage.getItem("users"));
		n=users.length;
        var unm=JSON.parse(localStorage.getItem("userInfo")).username;
        var psw=JSON.parse(localStorage.getItem("userInfo")).password;
		for(var i=0;i<n;i++)
		{
            
			if(users[i].username===unm && users[i].password===psw)
			{
                console.log(unm);
				setUser(users[i]);
                console.log(user);
				break;
			}
		}
		console.log(user);
		console.log(user.uid);
		localStorage.setItem("sellrequestdetails", JSON.stringify(user));
       
        
		
		
	},[]);
useEffect(()=>{
	fetch("http://localhost:8080/getallPub")
		.then(resp=>resp.json())
		.then((data)=>{
			setPublishers(data);	
		});
},[]);

const getdetails=()=>{
    fetch("http://localhost:8080/getmyrequest?uid="+user.uid).then(resp=>resp.json()).then(data=>{setrequest(data)});
    console.log(publishers);
    //console.log(request);
}


    return(
            <div className="container" >
		    <CustHome/>
			<div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
		
			<br/>
			<br/>
			<br/>
			<center>
		        <h1><u>Sell Book </u></h1><br/>
                <input type="button" value="show details" className="btn btn-primary btn-lg btn-block" onClick={getdetails}/><br/><br/> <br/>
                <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", width:"1125px"}}  >
	 <br/> 
              <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
                    <tr>
                        <th>Book Name</th>
                        <th>publisher</th>
                        <th>Buying Year</th>
                        <th>Publish Year</th>
                        <th>Buying Price</th>
                        <th>Selling Price</th>
                        <th>Status</th>
                    </tr>
              
                  {
                      request.map((r)=>{
                          return(
                              <tr>
                                  <td>{r.bid.book_title}</td>
                                   {
                                          publishers.map((p)=>{
                                              if(p.pub_id==r.pub_id)
                                              {
                                                return  <td> {p.pub_name}</td>
                                              }
                                          }

                                          )
                                           
                                      } 
                                   <td>{r.buying_year}</td>
                                   <td>{r.publish_year}</td>
                                   <td>{r.buying_price}</td>
                                   <td>{r.selling_price}</td>
                                   <td>{r.status}</td>
                              </tr>
                          );
                      })
                  }
              </table>
              </div>
              </center>
              </div>
        </div>

    );
}