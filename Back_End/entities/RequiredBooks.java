package com.example.demo.entities;

import javax.persistence.Id;

public class RequiredBooks {
	
	private  int bid;
	
	private String bname;

	private int pubid;

	private String Book_type;
	
	private String publish_year;
	
	private double price;
	
	private int quantity;

	public RequiredBooks() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RequiredBooks(int bid, String bname, int pubid, String book_type, String publish_year, double price,
			int quantity) {
		super();
		this.bid = bid;
		this.bname = bname;
		this.pubid = pubid;
		Book_type = book_type;
		this.publish_year = publish_year;
		this.price = price;
		this.quantity = quantity;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}

	public int getPubid() {
		return pubid;
	}

	public void setPubid(int pubid) {
		this.pubid = pubid;
	}

	public String getBook_type() {
		return Book_type;
	}

	public void setBook_type(String book_type) {
		Book_type = book_type;
	}

	public String getPublish_year() {
		return publish_year;
	}

	public void setPublish_year(String publish_year) {
		this.publish_year = publish_year;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	

}
