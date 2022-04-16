package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CustSellReq;
import com.example.demo.entities.CustomerSellReq;
import com.example.demo.entities.RequestStatus;
import com.example.demo.entities.SellRequestDetails;
import com.example.demo.entities.book_dt;
import com.example.demo.services.CustomerSellReqService;
import com.example.demo.services.SellRequestDetails_Service;
import com.example.demo.services.book_dt_service;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class SellRequestDetailsController 
{
	@Autowired
	SellRequestDetails_Service srds;
	 @Autowired
		book_dt_service bservice;
	 @Autowired
	 CustomerSellReqService csr;
	   
	  @GetMapping("/getallrequestdetails")
		public List<SellRequestDetails> getAllrequestdetails() {
			return srds.getallrequest();
		}
	  @GetMapping("/getallrequest")
		public List<CustomerSellReq> getAllrequest() {
			return csr.getall();
		}
	  
	  @GetMapping("/getmyrequest")
		public List<SellRequestDetails> getmyreq(@RequestParam("uid") int uid) {
		  List<SellRequestDetails> r= srds.getallrequest();
		  List<SellRequestDetails> send_sr = new ArrayList<>();
		  Iterator<SellRequestDetails> it= r.iterator();
		   while(it.hasNext())
		   {
			   SellRequestDetails temp=it.next();
			   if(temp.getRequest_id().getUserid() == uid)
			   {
				   send_sr.add(temp);
			   }
		   }
		  return send_sr;
		}
	  
	  @PostMapping("/saverequest")
	  public SellRequestDetails save_request(@RequestBody SellRequestDetails s) {
		  
		  List<SellRequestDetails> list = srds.getallrequest();
		  Iterator<SellRequestDetails > it = list.iterator();
		  boolean flag= false;
		  while(it.hasNext())
		  {
			  if(it.next().getRequest_id().getUserid() == s.getRequest_id().getUserid())
			  {
				  flag=true;
				  break;
			  }
		  }
		  if(!flag)
		  {
			  CustomerSellReq ob1= new CustomerSellReq(s.getRequest_id().getUserid(),s.getRequest_id().getRequest_date(),"Request raised",0.00f);
			  CustomerSellReq cust=csr.saverequest(ob1);
		  }
		  book_dt b  =bservice.getbyid(s.getBid().getBid());
		  CustomerSellReq c =csr.getreqbyuid(s.getRequest_id().getUserid());
		  SellRequestDetails  ob= new SellRequestDetails (s.getBuying_price(),s.getBuying_year(),s.getPublish_year(),"Pending",0.00f,c,b,s.getPub_id());
			return srds.savereqdt(ob);
		 
		 /*System.out.println("User_id: "+s.getRequest_id().getUserid());
		  System.out.println("Request_date: "+s.getRequest_id().getRequest_date());
		  System.out.println("Bid "+s.getBid().getBid());
		  System.out.println("Bid "+s.getBuying_year());
		  return new SellRequestDetails();*/
	}
	 
	  @PostMapping("/updateStatusrequest")
	public String updatestatusrequest(@RequestBody RequestStatus s) {
		  int id=s.getSr_id();
		  String status = s.getStatus();
		  System.out.println(id+" : "+status);
		  srds.upadtestat(id, status);
		return "Update Status Successfully";
				
	}  
}
