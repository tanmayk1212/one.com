import React, { useState } from 'react'
import ShopkeeperHome from './ShopkeeperHome';
import { useEffect } from 'react';

export default function Stock()
{
    var count=0;
    const [addbookflag,setaddbookflag]= useState(true);
    const [addcourseflag,setaddcourseflag]= useState(true);
    const [addpublisherflag,setaddpublisherflag]= useState(true);
    const [courses,setCourses]=useState([]);
    const [publishers,setPublishers]=useState([]);
    const [stockdt,setstockdt]=useState([]);
    const [counta,setcounta]=useState([]);
    const [bookdt,setbookdt]=useState([]);

    useEffect(()=>{
		fetch("http://localhost:8080/getallstock")
		.then(resp=>resp.json())
		.then(data=>{setstockdt(data)});	
	},[]);

const showdata=()=>{
   //console.log(stockdt);
   console.log (bookdt);
}
    const getbook=()=>{

        fetch("http://localhost:8080/getallbooks")
		.then(resp=>resp.json())
		.then(data=>{setbookdt(data)});

        setaddpublisherflag(true);
        setaddcourseflag(true);
        setaddbookflag(false);
    }
    const getcourse=()=>{
        fetch("http://localhost:8080/getallcourse")
		.then(resp=>resp.json())
		.then(data=>{setCourses(data)});

        setaddcourseflag(false);
        setaddpublisherflag(true);
        setaddbookflag(true);
    }

    const getpublisher=()=>{
        fetch("http://localhost:8080/getallPub")
		.then(resp=>resp.json())
		.then(data=>{
			setPublishers(data);
			
		});

        setaddpublisherflag(false);
        setaddcourseflag(true);
        setaddbookflag(true);


    }

    const getcount=(e)=>{
        
            count=0;
            for( var j=0;j<stockdt;j++)
            {
                if(stockdt[j].pubid==e.target.value)
                   count++;
            }
            console.log(count);
         return count;
       
    }

    return(
        <div className="container" >
        <ShopkeeperHome />
        <div style={{  zIndex:"3", position:"absolute", left:"116px",top:"70px", width:"1125px", height:"0px"}}>
       
        <br/>
        {/*<input type="button" value="show data"  onClick={showdata} />*/}
        <br/>
        <br/>
        <center>
            <h1><u> Stock</u></h1><br/><br/>
            <input type="button" value="Book Details" className="btn btn-primary btn-lg btn-block" onClick={getbook}/> <span> {''}  </span>
            <input type="button" value="Course Details" className="btn btn-primary btn-lg btn-block" onClick={getcourse}/><span> {''}  </span>
            <input type="button" value="Publisher Details" className="btn btn-primary btn-lg btn-block" onClick={getpublisher}/><br/><br/> <br/>
         
          {/*   Div for course */ }
            <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", width:"1125px"}} hidden={addcourseflag} >
	           <br/> 
               <br/> 
              <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Total Sem</th>
                    </tr>
                  
                  
                     {
                         courses.map((e)=>{
                         return(   <tr>
                            <td>{e.course_id}</td>
                            <td>{e.course_name}</td>
                            <td>{e.total_sem}</td>
                            </tr>
                            );
                         })
                     }
                  
             </table>
            </div> 

          {/*   Div for Publisher */ }
            <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", width:"1125px"}} hidden={addpublisherflag} >
	           <br/> 
               <br/> 
              <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
                  <tr>
                      <th> Publisher Id</th>
                      <th> Publisher Name</th>
                  </tr>

                  {
                        
                         publishers.map((e)=>{
                         return(   <tr key={e.pub_id} value={e.pub_id}  onChange={getcount }>
                             
                            <td>{e.pub_id}</td>
                            <td>{e.pub_name}</td>
                       
                            </tr>
                            );
                         })
                     }
             </table>
            </div>

              {/*   Div for book */ }
             <div style={{borderStyle:"solid", backgroundColor:"lightcyan", borderWidth:"2px", zIndex:"3", position:"absolute", left:"0px", width:"1125px"}} hidden={addbookflag} >
	           <br/> 
               <br/> 
              <table border={"1"} className="table" style={{borderCollapse:"collapse"}} cellPadding={"5"} >
                  <tr>
                       <th> Book Id</th>
                      <th> Book Title</th>
                      <th> Semester</th>
                      <th> Course Name</th>
                     
               </tr>
                 {
                     bookdt.map((b)=>{
                         return (
                             <tr>
                            <td>{b.bid}</td>
                            <td>{b.book_title}</td>
                            <td>{b.semester}</td>
                            <td>{b.course_id.course_name}</td>
                           
                            
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