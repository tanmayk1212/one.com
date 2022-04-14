package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "stock_info")
@IdClass(StockId.class)
public class Stock_dt 
{
	@Id
	private  int bid;
	@Id
	private int pubid;
	@Id
	private String Book_type;
	
	private String publish_year;
	
	private double price;
	
	private int quantity;
	
	/* @OneToMany
		@JoinColumns ({@JoinColumn(name = "pub_id"),
		               @JoinColumn(name = "Book_type"),
		               @JoinColumn(name = "bid")})
		private Stock_dt book_pub;
*/
	public Stock_dt() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Stock_dt(String publish_year, double price, int quantity) {
		super();
		this.publish_year = publish_year;
		this.price = price;
		this.quantity = quantity;
	}

	public Stock_dt(int bid, int pubid, String type, String publish_year, double price, int quantity) {
		super();
		this.bid = bid;
		this.pubid = pubid;
		this.Book_type = type;
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

	public int getPubid() {
		return pubid;
	}

	public void setPubid(int pubid) {
		this.pubid = pubid;
	}

	public String getType() {
		return Book_type;
	}

	public void setType(String type) {
		this.Book_type = type;
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
