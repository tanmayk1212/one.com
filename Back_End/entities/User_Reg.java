package com.example.demo.entities;




public class User_Reg 
{

	private String fname,lname,email,username,password;
	
	
	private int sec_q;
	

	String answer,contactno,address;


	public User_Reg() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User_Reg(String fname, String lname, String email, String username, String password, int sec_q,
			String answer, String contactno, String address) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.username = username;
		this.password = password;
		this.sec_q = sec_q;
		this.answer = answer;
		this.contactno = contactno;
		this.address = address;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public int getSec_q() {
		return sec_q;
	}


	public void setSec_q(int sec_q) {
		this.sec_q = sec_q;
	}


	public String getAnswer() {
		return answer;
	}


	public void setAnswer(String answer) {
		this.answer = answer;
	}


	public String getContactno() {
		return contactno;
	}


	public void setContactno(String contactno) {
		this.contactno = contactno;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
