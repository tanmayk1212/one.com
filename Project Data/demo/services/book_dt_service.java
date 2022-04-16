package com.example.demo.services;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.book_dt;
import com.example.demo.repositories.Book_dtRepo;

@Transactional
@Service
public class book_dt_service
{
	@Autowired
	Book_dtRepo brepo;
	
	public List<book_dt> getAllBook() {
		return brepo.findAll();
	}
	
	public book_dt getbyid(int bid) {
		return brepo.findById(bid).get();
		
	}
	
	public book_dt saveBook(book_dt b) {
		return brepo.save(b);
	}
	
	public List<book_dt> getBooksByCidSem(int cid, int sem)
	{
		return brepo.getBooksByCidSem(cid, sem);
	}
	
	public book_dt getBookById(int bid)
	{
		return brepo.findById(bid).get();
	}
	
	public List<book_dt> getsellbook(int course_id,int semester  ) {
		return brepo.getBooksByCidSem(course_id, semester);
	}

}
