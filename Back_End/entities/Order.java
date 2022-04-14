package com.example.demo.entities;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oid;
	
	@Column
	private int u_id;
	
	@Column
	private String order_date, delivery_date;
	
	@Column
	private double total_price;
	
	@Column
	private String order_status;
	
	@JsonIgnoreProperties("order")
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private Set<OrderItem> orderItems;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int oid, int u_id, String order_date, String delivery_date, double total_price, String order_status,
			Set<OrderItem> orderItems) {
		super();
		this.oid = oid;
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.order_status = order_status;
		this.orderItems = orderItems;
	}

	public Order(int u_id, String order_date, String delivery_date, double total_price, String order_status,
			Set<OrderItem> orderItems) {
		super();
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.order_status = order_status;
		this.orderItems = orderItems;
	}

	public Order(int oid, int u_id, String order_date, String delivery_date, double total_price, String order_status) {
		super();
		this.oid = oid;
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.order_status = order_status;
	}

	public Order(int u_id, String order_date, String delivery_date, double total_price, String order_status) {
		super();
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.order_status = order_status;
	}

	public Order(int u_id, String order_date, String delivery_date, double total_price, Set<OrderItem> orderItems) {
		super();
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.orderItems = orderItems;
	}

	public Order(int oid, int u_id, String order_date, String delivery_date, double total_price,
			Set<OrderItem> orderItems) {
		super();
		this.oid = oid;
		this.u_id = u_id;
		this.order_date = order_date;
		this.delivery_date = delivery_date;
		this.total_price = total_price;
		this.orderItems = orderItems;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public String getOrder_date() {
		return order_date;
	}

	public void setOrder_date(String order_date) {
		this.order_date = order_date;
	}

	public String getDelivery_date() {
		return delivery_date;
	}

	public void setDelivery_date(String delivery_date) {
		this.delivery_date = delivery_date;
	}

	public double getTotal_price() {
		return total_price;
	}

	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}

	public String getOrder_status() {
		return order_status;
	}

	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}

	public Set<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(Set<OrderItem> orderItems) {
		this.orderItems = orderItems;
		for(OrderItem o: orderItems)
		{
			o.setOrder(this);
		}
	}
	
	
	

}
