package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.SellRequestDetails;
import com.example.demo.repositories.SellRequestDetailsRepo;

@Transactional
@Service
public class SellRequestDetails_Service 
{
      @Autowired
	SellRequestDetailsRepo srrepo;
	
	public List<SellRequestDetails> getallrequest() {
		return srrepo.findAll();
	}
	
	public SellRequestDetails savereqdt(SellRequestDetails u)
	{
		return srrepo.save(u);
	}
	
	public void  upadtestat(int sr_id, String status) {
		 srrepo.assignmantstatus(sr_id, status);
	}

}
