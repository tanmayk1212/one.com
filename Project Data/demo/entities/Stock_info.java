package com.example.demo.entities;

public class Stock_info {
	
	private int courseId, sem, pub;
	private String bType;
	public Stock_info() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Stock_info(int courseId, int sem, int pub, String bType) {
		super();
		this.courseId = courseId;
		this.sem = sem;
		this.pub = pub;
		this.bType = bType;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public int getSem() {
		return sem;
	}
	public void setSem(int sem) {
		this.sem = sem;
	}
	public int getPub() {
		return pub;
	}
	public void setPub(int pub) {
		this.pub = pub;
	}
	public String getbType() {
		return bType;
	}
	public void setbType(String bType) {
		this.bType = bType;
	}
	

}
