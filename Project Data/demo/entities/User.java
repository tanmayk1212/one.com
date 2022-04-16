package com.example.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	
	@Column(columnDefinition = "varchar2(45) default 'Customer'")
	private String utype="Customer";
	
	@Column
	private String fname,lname,email,username,password;
	
	@JsonIgnoreProperties("users")
	@ManyToOne
	@JoinColumn(name="qid")
	private Sec_q sec_q;
	
	@Column
	String answer,contactno,address;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(String fname, String lname, String email, String username, String password, Sec_q sec_q, String answer,
			String contactno, String address) {
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
public User(String username, String password) {
	super();
	this.username = username;
	this.password = password;
}

public User(int uid, String fname, String lname, String email, String username, String password,
		Sec_q sec_q, String answer, String contactno, String address) {
	super();
	this.uid = uid;
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


	public User(int uid, String utype, String fname, String lname, String email, String username, String password,
			Sec_q sec_q, String answer, String contactno, String address) {
		super();
		this.uid = uid;
		this.utype = utype;
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

	public User(String fname, String lname, String email, String username, String password, String answer,
			String contactno, String address) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.contactno = contactno;
		this.address = address;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUtype() {
		return utype;
	}

	public void setUtype(String utype) {
		this.utype = utype;
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

	public Sec_q getSec_q() {
		return sec_q;
	}

	public void setSec_q(Sec_q sec_q) {
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
