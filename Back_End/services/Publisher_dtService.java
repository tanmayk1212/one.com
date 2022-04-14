package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Publisher;
import com.example.demo.entities.Publisher_dt;
import com.example.demo.repositories.Publisher_dtRepo;

@Transactional
@Service
public class Publisher_dtService 
{
	@Autowired
	Publisher_dtRepo prepo;
	
	public List<Publisher_dt> getAllPublisher() {
		return prepo.findAll();
	}
	public Publisher_dt getbypub_id(int pub_id) {
		return prepo.findById(pub_id).get();
	}
	
	public List<Publisher> getPublisher() {
		List<Publisher_dt> p=prepo.findAll();
		List <Publisher> allp= new ArrayList<>();
		for(Publisher_dt b:p)
		{
			allp.add(new Publisher(b.getPub_id(), b.getPub_name()));
		}
		return allp;
	}
	public Publisher_dt getPubById(int pid)
	{
		return prepo.findById(pid).get();
	}
	
}
