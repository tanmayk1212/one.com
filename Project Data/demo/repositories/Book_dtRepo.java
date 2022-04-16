package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.book_dt;

@Transactional
@Repository
public interface Book_dtRepo extends JpaRepository<book_dt, Integer> {
	
	@Query("select bk from book_dt bk where bk.course_id.course_id=?1 and bk.semester=?2")
	public List<book_dt> getBooksByCidSem(int cid, int sem);

}
