package com.example.demo.services;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Sec_q;
import com.example.demo.repositories.Seq_qRepo;
@Transactional
@Service
public class Seq_qService {
	@Autowired
	Seq_qRepo srepo;
	
	
	public List<Sec_q> getSecq()
	{
		return srepo.findAll(); 
	}
	
	public Sec_q getQ(int qid)
	{
		return srepo.findById(qid).get();
	}

}
