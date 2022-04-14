package com.example.demo.entities;


public class CustSellReq 
{

 private float buying_price;
	
	private String buying_year;
	

	private String publish_year;
	

	private String status;
	

	private float selling_price;
	
	
	private CustomerSellReq request_id;
	
	
	private book_dt bid;
	

	private int pub_id;


	public CustSellReq() {
		super();
		// TODO Auto-generated constructor stub
	}


	public CustSellReq(float buying_price, String buying_year, String publish_year, String status, float selling_price,
			CustomerSellReq request_id, book_dt bid, int pub_id) {
		super();
		this.buying_price = buying_price;
		this.buying_year = buying_year;
		this.publish_year = publish_year;
		this.status = status;
		this.selling_price = selling_price;
		this.request_id = request_id;
		this.bid = bid;
		this.pub_id = pub_id;
	}


	public float getBuying_price() {
		return buying_price;
	}


	public void setBuying_price(float buying_price) {
		this.buying_price = buying_price;
	}


	public String getBuying_year() {
		return buying_year;
	}


	public void setBuying_year(String buying_year) {
		this.buying_year = buying_year;
	}


	public String getPublish_year() {
		return publish_year;
	}


	public void setPublish_year(String publish_year) {
		this.publish_year = publish_year;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public float getSelling_price() {
		return selling_price;
	}


	public void setSelling_price(float selling_price) {
		this.selling_price = selling_price;
	}


	public CustomerSellReq getRequest_id() {
		return request_id;
	}


	public void setRequest_id(CustomerSellReq request_id) {
		this.request_id = request_id;
	}


	public book_dt getBid() {
		return bid;
	}


	public void setBid(book_dt bid) {
		this.bid = bid;
	}


	public int getPub_id() {
		return pub_id;
	}


	public void setPub_id(int pub_id) {
		this.pub_id = pub_id;
	}
	
	
	
}
