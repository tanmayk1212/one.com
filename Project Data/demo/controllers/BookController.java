package com.example.demo.controllers;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.book_dt;
import com.example.demo.entities.Book;
import com.example.demo.entities.Course_dt;
import com.example.demo.entities.Publisher_dt;
import com.example.demo.entities.Stock_dt;
import com.example.demo.entities.Stock_info;
import com.example.demo.services.Publisher_dtService;
import com.example.demo.services.Stock_dtService;
import com.example.demo.services.book_dt_service;
import com.example.demo.services.course_service;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class BookController 
{
     @Autowired
	book_dt_service bservice;
     
     @Autowired
     course_service cservice;
     
     @Autowired
     Publisher_dtService pservice;
     
     @Autowired
     Stock_dtService sservice;
	
     @GetMapping("/getallbooks")
	public List<book_dt> getAllb() {
		return bservice.getAllBook();
	}
	
	@GetMapping("/getbyidbooks")
	public book_dt getbyid(@RequestParam("bid") int id) {
		return bservice.getbyid(id);
	}
	
	@PostMapping("/savebook")
	public book_dt saveBook(@RequestBody book_dt t) 
	{
		return bservice.saveBook(t);
	}
	
	@GetMapping("/getallcourse")
	public List<Course_dt> getAllCourse() {
		return cservice.getAllCourse();
	}
	
	@PostMapping("/savecourse")
	public Course_dt saveCourse(@RequestBody Course_dt c) {
		return cservice.saveCourse(c);
	}
	
	@GetMapping("/getallPub")
	public List<Publisher_dt> getAllPublisher() {
		return pservice.getAllPublisher();
	}
	
	@GetMapping("/getSemesters")
	public String getSemesters(@RequestParam("cid") int id)
	{
		Course_dt c=cservice.getCourse(id);
		return c.getTotal_sem()+"";
	}
	
	@PostMapping("/getsellbook")
	public List<book_dt> getsellbook(@RequestBody Book t) 
	{  
		List <book_dt> b= bservice.getsellbook(t.getCid(), t.getSemester());
		   
		return b;
	}
	
	@PostMapping("/getStockDetbook")
	 public List<Stock_dt> getStockDetbook(@RequestBody Stock_info stif)
	 {
		 
		 List<book_dt> bdts =  bservice.getBooksByCidSem(stif.getCourseId(),stif.getSem());
		 
		 List<Stock_dt> stdt=sservice.getAllStock(bdts,stif.getPub(),stif.getbType());
		 return stdt;
	 }
}
