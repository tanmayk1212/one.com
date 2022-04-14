package com.example.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="order_details")
public class OrderItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int srno;
	
	@ManyToOne
	@JoinColumn(name="b_id")
	private book_dt b_id;
	
	@ManyToOne
	@JoinColumn(name="p_id")
	private Publisher_dt p_id;
	
	@Column
	private String b_type, pb_year;
	
	@Column
	private double price;
	
	@Column
	private int qty;
	
	@JsonIgnoreProperties("orderItems")
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="order_id")
	private Order order;

	public OrderItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderItem(int srno, book_dt b_id, Publisher_dt p_id, String b_type, String pb_year, double price, int qty,
			Order order) {
		super();
		this.srno = srno;
		this.b_id = b_id;
		this.p_id = p_id;
		this.b_type = b_type;
		this.pb_year = pb_year;
		this.price = price;
		this.qty = qty;
		this.order = order;
	}

	public OrderItem(book_dt b_id, Publisher_dt p_id, String b_type, String pb_year, double price, int qty,
			Order order) {
		super();
		this.b_id = b_id;
		this.p_id = p_id;
		this.b_type = b_type;
		this.pb_year = pb_year;
		this.price = price;
		this.qty = qty;
		this.order = order;
	}

	public OrderItem(book_dt b_id, Publisher_dt p_id, String b_type, String pb_year, double price, int qty) {
		super();
		this.b_id = b_id;
		this.p_id = p_id;
		this.b_type = b_type;
		this.pb_year = pb_year;
		this.price = price;
		this.qty = qty;
	}

	public int getSrno() {
		return srno;
	}

	public void setSrno(int srno) {
		this.srno = srno;
	}

	public book_dt getB_id() {
		return b_id;
	}

	public void setB_id(book_dt b_id) {
		this.b_id = b_id;
	}

	public Publisher_dt getP_id() {
		return p_id;
	}

	public void setP_id(Publisher_dt p_id) {
		this.p_id = p_id;
	}

	public String getB_type() {
		return b_type;
	}

	public void setB_type(String b_type) {
		this.b_type = b_type;
	}

	public String getPb_year() {
		return pb_year;
	}

	public void setPb_year(String pb_year) {
		this.pb_year = pb_year;
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

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	

	
}
