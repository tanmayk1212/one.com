import React from 'react'
import ShopkeeperHome from './ShopkeeperHome';
import { useState } from 'react';
import { useEffect } from 'react';


export default function CustSellRequest(){

    const [requestdetails,setrequestdetails]=useState([]);
    const [publishers,setPublishers]=useState([]);
    const [hideF,setHideF]=useState(true);
    const [id,setid] = useState();
    const [request,setrequest]=useState([]);
    const [reqid,setreqid]= useState();
    const [reqstatus,setreqStatus]=useState();
    const [hideupdate,sethideupdate]=useState(true);
    const[updatedstatus,setupdatedstatus]=useState();
     const[result,setresult]=useState();

    const getdata=(e)=>{
        console.log(e.target.id);
        setHideF(false);
        console.log(requestdetails);
        console.log(request);
        console.log(publishers);
        setid(e.target.id);
        console.log(id);

      
    }
   
    const getdetails=()=>{
        fetch("http://localhost:8080/getallrequest")
            .then(resp=>resp.json())
            .then((data)=>{
                setrequest(data);	
            });

        fetch("http://localhost:8080/getallPub")
            .then(resp=>resp.json())
            .then((data)=>{
                setPublishers(data);	
            });
       
    }
    useEffect(()=>{
        fetch("http://localhost:8080/getallrequestdetails").then(resp=>resp.json()).then(data=>{setrequestdetails(data)});
    },[]);

   const setStatus=(e)=>{
        console.log(id);
        console.log(updatedstatus);
    e.preventDefault();
    const reqData={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        sr_id:id,
        status:updatedstatus

    })
}
fetch("http://localhost:8080/updateStatus",reqData)
.then(resp=>resp.json())
.then((data)=>{setresult(data)
});

/*if(result==1)
   alert("updated Successfully");
else
 alert("updated falied");
*/
}

   const setupdate=(e)=>{
    setreqid(e.target.value);
    sethideupdate(false);
   }
   const setreqStat=(e)=>{
       setreqStatus(e.target.value);
   }
   const setter=(e)=>{
    setupdatedstatus(e.target.value);
       
   }

    return(
        <div className="container" >
        <ShopkeeperHome />
        <div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
        </div>
        <br/>
        <br/>
        <br/>
        <center>
            <h1><u>Sell Book </u></h1><br/>
            <input type="button" value="show details" className="btn btn-primary btn-lg btn-block" onClick={getdetails}/><br/><br/> <br/>
                <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"116px", width:"1125px"}}  >
	           <br/> 
               <br/> 
              <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
                    <tr>
                        
                         <th>Request Id</th>
                         <th>User Id</th>
                         <th>Request Date</th>
                         <th>Total Selling Price</th>
                         <th>Request Status</th>
                        
                    </tr>
                            
                    {
                      request.map((r)=>{
                          return(
                              <tr>
                                   
                                   <td>{r.req_id}</td>
                                   <td>{r.userid}</td>
                                   <td>{r.request_date}</td>
                                   <td>{r.total_selling_price}</td>
                                <td>{r.request_status}</td>
                                  <td><input type="button" id={r.req_id} value="View Details" onClick={getdata} defaultValue={r.req_id} className="btn btn-lg btn-info"  /></td>
                              </tr>
                          );
                      })
                  }
                   </table>
                  <div>
                        <br/>
                        <br/>

                  </div>
              
             </div>
             </center>  
       <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute",left:"120px", width:"1050px", top:"750px"}} hidden={hideF} >
						  <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
					    <tr>
                          <th>Select</th>    
                        <th>Book Name</th>
                        <th>publisher</th>
                        <th>Buying Year</th>
                        <th>Publish Year</th>
                        <th>Buying Price</th>
                        <th>Selling Price</th>
                        <th>Status</th>
                        <th hidden={hideupdate}>Update Status</th>
                        </tr>
                          
                       
                        {
                         requestdetails.map((r)=>{
                            //console.log(id);
                            if(r.request_id.req_id==id)
                            {
                           {
                        return(
                              <tr>
                                   <td><input type="checkbox" name="requestId" key={r.sr_no} value={r.sr_no} id={r.sr_no} onClick={ setupdate}   /></td>
                                   <td>{r.bid.book_title}</td>
                                  
                                       {
                                           publishers.map((e)=>{
                                            if(e.pub_id==r.pub_id){
                                                return <td>{e.pub_name}</td>
                                            }
                                           
                                           }

                                           )
                                       }
                                  
                                   <td>{r.buying_year}</td>
                                   <td>{r.publish_year}</td>
                                   <td>{r.buying_price}</td>
                                   <td>{r.selling_price}</td>
                                <td>{r.status}</td>

                                <td hidden={hideupdate}>
                    <select className="form-select"  name="reqstatus" onChange={setter} >
                          <option key="0" value="0">Select</option>
						     <option key="Accepted" value="Accepted">Accepted</option>
                              <option key="Rejected" value="Rejected">Rejected</option>
                            </select>
                           
                            </td>
                                  </tr>
                          );}
                        }
                      })
                  }
                       <tr hidden={hideupdate}>
                        <div className="form-group">
                       <div className="col-md-offset-5 col-md-7 mt-3 mb-3">
                      <td><input type="button" value="Update" className="btn btn-primary btn-lg btn-block" onClick={setStatus} />{' '}</td> 
					   <td><input type="button" value="Delete" className="btn btn-primary btn-lg btn-block"    /></td>
					  </div>
                 </div>
              
                 </tr>
                
                        </table>
              
               </div> 
            
        {/* 
         
         <div hidden={hideupdate}>

                   
                   
                    </div>
        
        
        <td>{r.bid.book_title}</td>
                                  <td>
                                  {
                                          publishers.map((p)=>{
                                              if(p.pub_id==r.pub_id)
                                              {
                                                return  <td> {p.pub_name}</td>
                                              }
                                          }

                                          )
                                           
                                      } 
                                  </td>
                                   <td>{r.buying_year}</td>
                                   <td>{r.publish_year}</td>
                                   <td>{r.buying_price}</td>
                                   <td>{r.selling_price}</td>
                                   <td>{r.status}</td> */}
        	
        </div>
       
    );
}