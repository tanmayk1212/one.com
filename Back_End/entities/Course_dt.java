package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "course_dt")
public class Course_dt
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int course_id;
	
	@Column
	private String course_name;
	
	@Column
	private int total_sem;
	
	

	public Course_dt() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course_dt(String course_name, int total_sem) {
		super();
		this.course_name = course_name;
		this.total_sem = total_sem;
	}

	public Course_dt(int course_id, String course_name, int total_sem) {
		super();
		this.course_id = course_id;
		this.course_name = course_name;
		this.total_sem = total_sem;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

	public String getCourse_name() {
		return course_name;
	}

	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}

	public int getTotal_sem() {
		return total_sem;
	}

	public void setTotal_sem(int total_sem) {
		this.total_sem = total_sem;
	}
	
	
	
}
