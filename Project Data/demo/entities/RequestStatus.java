package com.example.demo.entities;

public class RequestStatus {
	private int sr_id;
	private String status;
	public RequestStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RequestStatus(int sr_id, String status) {
		super();
		this.sr_id = sr_id;
		this.status = status;
	}
	public int getSr_id() {
		return sr_id;
	}
	public void setSr_id(int sr_id) {
		this.sr_id = sr_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
