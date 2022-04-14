package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Stock_dt;
import com.example.demo.entities.book_dt;
import com.example.demo.repositories.Stock_Repo;

@Service
public class Stock_dtService 
{
	@Autowired
	Stock_Repo srepo;
    
	 public List<Stock_dt> getAllStock() {
		return srepo.findAll();
	}
	 
	 public List<Stock_dt> getAllStock(List<book_dt> bdts,int pubid,String bType) {
		 List<Integer> bids=new ArrayList<>();
		 for(book_dt bdt: bdts)
		 {
			 bids.add(bdt.getBid());
		 }
		 return srepo.findStocks(bids,pubid,bType);
		 
	 }

	 
}
