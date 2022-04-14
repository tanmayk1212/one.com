package com.example.demo.entities;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="security_ques")
public class Sec_q {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qid;
	
	@Column
	private String question;

	public Sec_q() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Sec_q(int qid) {
		super();
		this.qid = qid;
	}

	public Sec_q(String question) {
		super();
		this.question = question;
	}

	public Sec_q(int qid, String question) {
		super();
		this.qid = qid;
		this.question = question;
	}

	

	public int getQid() {
		return qid;
	}

	public void setQid(int qid) {
		this.qid = qid;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}


}
