package com.example.demo.services;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	public Publisher_dt getPubById(int pid)
	{
		return prepo.findById(pid).get();
	}
	
}
