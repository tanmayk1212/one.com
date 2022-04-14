package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cust_sell_req")
public class CustomerSellReq 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int req_id;
	
	@Column
	private int userid;
	
	@Column
	private String request_date;
	
	@Column
	private String request_status;
	
	@Column
	private  float total_selling_price;

	public CustomerSellReq() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public CustomerSellReq(int userid, String request_date, String request_status, float total_selling_price) {
		super();
		this.userid = userid;
		this.request_date = request_date;
		this.request_status = request_status;
		this.total_selling_price = total_selling_price;
	}
	
	public CustomerSellReq(int req_id, int userid, String request_date, String request_status,
			float total_selling_price) {
		super();
		this.req_id = req_id;
		this.userid = userid;
		this.request_date = request_date;
		this.request_status = request_status;
		this.total_selling_price = total_selling_price;
	}



	public int getReq_id() {
		return req_id;
	}



	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}



	public int getUserid() {
		return userid;
	}



	public void setUserid(int userid) {
		this.userid = userid;
	}



	public String getRequest_date() {
		return request_date;
	}



	public void setRequest_date(String request_date) {
		this.request_date = request_date;
	}



	public String getRequest_status() {
		return request_status;
	}



	public void setRequest_status(String request_status) {
		this.request_status = request_status;
	}



	public float getTotal_selling_price() {
		return total_selling_price;
	}



	public void setTotal_selling_price(float total_selling_price) {
		this.total_selling_price = total_selling_price;
	}
	
	

}
