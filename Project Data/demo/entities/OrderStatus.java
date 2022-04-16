package com.example.demo.entities;

public class OrderStatus {
	private int oid;
	private String status;
	public OrderStatus(int oid, String status) {
		super();
		this.oid = oid;
		this.status = status;
	}
	public OrderStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	

}
