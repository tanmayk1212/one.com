package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="cart_info")

public class CartInfo {
	
	@ManyToOne
	@JoinColumn(name="book_id")
	private book_dt book_id;
	
	@ManyToOne
	@JoinColumn(name="pubid")
	private Publisher_dt pubid;
	
	@Column
	private String book_type, pub_year;
	
	@Column
	private double price;
	
	@Column
	private int qty;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int srno;
	
	@JsonIgnoreProperties("cartInf")
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="cart_id")
	private Cart cart;

	public CartInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CartInfo(book_dt book_id, Publisher_dt pubid, String book_type, String pub_year, double price, int qty,
			int srno, Cart cart) {
		super();
		this.book_id = book_id;
		this.pubid = pubid;
		this.book_type = book_type;
		this.pub_year = pub_year;
		this.price = price;
		this.qty = qty;
		this.srno = srno;
		this.cart = cart;
	}

	public CartInfo(book_dt book_id, Publisher_dt pubid, String book_type, String pub_year, double price, int qty,
			Cart cart) {
		super();
		this.book_id = book_id;
		this.pubid = pubid;
		this.book_type = book_type;
		this.pub_year = pub_year;
		this.price = price;
		this.qty = qty;
		this.cart = cart;
	}

	public CartInfo(book_dt book_id, Publisher_dt pubid, String book_type, String pub_year, double price, int qty,
			int srno) {
		super();
		this.book_id = book_id;
		this.pubid = pubid;
		this.book_type = book_type;
		this.pub_year = pub_year;
		this.price = price;
		this.qty = qty;
		this.srno = srno;
	}

	public CartInfo(book_dt book_id, Publisher_dt pubid, String book_type, String pub_year, double price, int qty) {
		super();
		this.book_id = book_id;
		this.pubid = pubid;
		this.book_type = book_type;
		this.pub_year = pub_year;
		this.price = price;
		this.qty = qty;
	}

	public book_dt getBook_id() {
		return book_id;
	}

	public void setBook_id(book_dt book_id) {
		this.book_id = book_id;
	}

	public Publisher_dt getPubid() {
		return pubid;
	}

	public void setPubid(Publisher_dt pubid) {
		this.pubid = pubid;
	}

	public String getBook_type() {
		return book_type;
	}

	public void setBook_type(String book_type) {
		this.book_type = book_type;
	}

	public String getPub_year() {
		return pub_year;
	}

	public void setPub_year(String pub_year) {
		this.pub_year = pub_year;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getSrno() {
		return srno;
	}

	public void setSrno(int srno) {
		this.srno = srno;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	

	

}
