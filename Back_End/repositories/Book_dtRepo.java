package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.book_dt;

public interface Book_dtRepo extends JpaRepository<book_dt, Integer> {

	@Query("select b  from book_dt b where b.course_id.course_id=?1 and b.semester=?2 ")
	public List<book_dt> getsellbook(int course_id,int semester  ) ;
	
	@Query("select bk from book_dt bk where bk.course_id.course_id=?1 and bk.semester=?2")
	public List<book_dt> getBooksByCidSem(int cid, int sem);


}