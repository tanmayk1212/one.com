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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RequiredBooks;
import com.example.demo.entities.Stock_dt;
import com.example.demo.entities.Stock_info;
import com.example.demo.entities.book_dt;
import com.example.demo.repositories.Book_dtRepo;
import com.example.demo.services.Stock_dtService;
import com.example.demo.services.book_dt_service;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class StockController 
{
	@Autowired
	Stock_dtService  sservice;
	
	 @Autowired
		book_dt_service bservice;
	
	 @GetMapping("/getallstock")
		public List<Stock_dt> getAllStock() {
			return sservice.getAllStock();
		}
		
	 @PostMapping("/getStockDet")
	 public  List<RequiredBooks> getStockDet(@RequestBody Stock_info stif)
	 {
		 
		 List<book_dt> bdts =  bservice.getBooksByCidSem(stif.getCourseId(),stif.getSem());
		 
		 List<Stock_dt> stdt=sservice.getAllStock(bdts,stif.getPub(),stif.getbType());
		 List<RequiredBooks> reqbs=new ArrayList<>();
		 for(Stock_dt sdt: stdt) 
		 {
			
			 for(book_dt bdt: bdts)
			 {
				 if(sdt.getBid()==bdt.getBid())
				 {
					 System.out.println(sdt.getPublish_year());
					 RequiredBooks reqbk=new RequiredBooks(bdt.getBid(),bdt.getBook_title(),sdt.getPubid(),sdt.getType(),sdt.getPublish_year(),sdt.getPrice(),sdt.getQuantity());
					 reqbs.add(reqbk);
				 }
			 }
		 }
		 return reqbs;
		 
	
		 
	 }
	 
}
