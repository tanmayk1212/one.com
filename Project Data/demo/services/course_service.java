package com.example.demo.services;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Course_dt;
import com.example.demo.repositories.Course_Repo;

@Transactional
@Service
public class course_service
{
	@Autowired
	Course_Repo crepo;
	
	public List<Course_dt> getAllCourse() {
		return crepo.findAll();
	}
	
	public Course_dt saveCourse(Course_dt c) {
		 return crepo.save(c);
	}
	
	public Course_dt getCourse(int id)
	{
		return crepo.findById(id).get();
	}

}
