import React, { useEffect } from 'react'
import ShopkeeperHome from './ShopkeeperHome';
import { useState } from 'react';

export default function GenerateReport(){

    const[type,settype]=useState();
    const [sellingreq,setsellingreq]=useState([]);
    const [ending_date,setending_date]=useState();
    const [starting_date,setstarting_date]=useState();
    const [hideF,setHideF]=useState(true);

    const setter=(e)=>{
        settype(e.target.value);
           
       }
    
    const showdata=()=>{
        console.log(type);
        console.log(sellingreq);
        console.log(starting_date);
        console.log(ending_date);
    } 
    const start=(e)=>{
        setstarting_date(e.target.value);
    }
    const end=(e)=>{
         setending_date(e.target.value);
    }
    
    const getdata=()=>{
        if(type=="Buying")
        { 
            setHideF(false);

        }
        if(type=="Selling")
        {
           // fetch("http://localhost:8080/getallrequestdetails").then(resp=>resp.json()).then(data=>{setsellingreq(data)});
        }
    }

    useEffect(()=>{
        fetch("http://localhost:8080/getallrequest").then(resp=>resp.json()).then(data=>{setsellingreq(data)});
    },[]);
    

    return(
        <div className="container" >
        <ShopkeeperHome />
        <div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
        </div>
        <br/>
        <input type="button" value="show data"  onClick={showdata}/>
        <br/>
        <br/>
        <center>
            <h1><u>Genrate Report </u></h1><br/><br/>
            
                <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px", width:"1125px"}}  >
	           <br/> 
               <br/>  
           <table  border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"6"}   > 
               <tr>
                   <th>Type</th>
                   <th>Date</th>
                  
               </tr>
               
               <tr> 
                    <td><select className="form-select"  name="reqstatus" onChange={setter} >
                          <option key="0" value="0">Select Report</option>
						     <option key="Buying" value="Buying">Buying Report</option>
                              <option key="Selling" value="Selling">Selling Report</option>
                            </select>
                            </td>     
               {/*  <td> <input type="date"  name="starting_date" key={starting_date} value={starting_date} onChange={end}  /></td>
					<td><input type="date" name="ending_date" key={ending_date} value={ending_date} onChange={end}  /></td>*/}
						<td><input type="button" value="show details" className="btn btn-info btn-lg btn-block" onClick={getdata}/></td>
              </tr> 
              </table>       
              </div> 

             <div>   <br/> 
               <br/> </div>
               <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px", width:"1125px",top:"450px"}} hidden={hideF}  >
	           <br/>  
           <table  border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"6"}   > 
              
               <tr>
                        
                        <th>Request Id</th>
                        <th>User Id</th>
                        <th>Request Date</th>
                        <th>Total Selling Price</th>
                        <th>Request Status</th>
                       
                   </tr>
                   {
                      sellingreq.map((r)=>{
                        if(r.request_status=="Accepted" ) 
                        {return(
                              <tr>
                                   
                                   <td>{r.req_id}</td>
                                   <td>{r.userid}</td>
                                   <td>{r.request_date}</td>
                                   <td>{r.total_selling_price}</td>
                                <td>{r.request_status}</td>
                                
                              </tr>
                          );}
                      })
                  }
              </table>
             
   </div>
       </center>
       </div>
    );
}