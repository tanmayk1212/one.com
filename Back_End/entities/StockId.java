package com.example.demo.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public  class StockId implements Serializable {

	private int bid;
	
	private int pubid;
	
	private String Book_type;

	public StockId() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StockId(int bid, int pubid, String type) {
		super();
		this.bid = bid;
		this.pubid = pubid;
		this.Book_type = type;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(Book_type, bid, pubid);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StockId other = (StockId) obj;
		return Objects.equals(Book_type, other.Book_type) && bid == other.bid && pubid == other.pubid;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public int getPubid() {
		return pubid;
	}

	public void setPubid(int pubid) {
		this.pubid = pubid;
	}

	public String getType() {
		return Book_type;
	}

	public void setType(String type) {
		this.Book_type = type;
	}
	
	
	
}
