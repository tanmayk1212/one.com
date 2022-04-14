package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CustomerSellReq;
import com.example.demo.repositories.CustomerSellReqRepo;

@Service
public class CustomerSellReqService 
{
	@Autowired
	CustomerSellReqRepo csrr;
	
	public CustomerSellReq saverequest(CustomerSellReq r)
	{
		return csrr.save(r);
	}
	
	public CustomerSellReq getbyreqid(int req) 
	{
	   return	csrr.findById(req).get();
	     
	}
	public CustomerSellReq getreqbyuid(int uid) 
	{
	   return	csrr.getreqbyuid(uid);
	     
	}
	public List<CustomerSellReq> getall() {
		return csrr.findAll();
	}
}
