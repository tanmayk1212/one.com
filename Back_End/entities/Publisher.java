package com.example.demo.entities;

public class Publisher {
	
	private int pub_id;
	
	private String pub_name;

	public Publisher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Publisher(int pub_id, String pub_name) {
		super();
		this.pub_id = pub_id;
		this.pub_name = pub_name;
	}

	public int getPub_id() {
		return pub_id;
	}

	public void setPub_id(int pub_id) {
		this.pub_id = pub_id;
	}

	public String getPub_name() {
		return pub_name;
	}

	public void setPub_name(String pub_name) {
		this.pub_name = pub_name;
	}
	
	

}
