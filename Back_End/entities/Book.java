package com.example.demo.entities;

public class Book {
	private int bid,cid;
	private String book_title;
	private int semester;
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int bid, int cid, String book_title, int semester) {
		super();
		this.bid = bid;
		this.cid = cid;
		this.book_title = book_title;
		this.semester = semester;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getBook_title() {
		return book_title;
	}
	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
	
	

}
