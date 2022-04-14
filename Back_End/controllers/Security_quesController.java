package com.example.demo.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Sec_q;


import com.example.demo.services.Seq_qService;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class Security_quesController 
{
	@Autowired
	Seq_qService  sq;
	
	@GetMapping("/allquestion")
	public List<Sec_q> getList()
	{
		return sq.getSecq();
	}

}
