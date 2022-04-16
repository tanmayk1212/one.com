package com.example.demo.entities;

public class AddCartInfo {
	
	private int uid;
	private String [] book_ids;
	private String [] book_names;
	private String [] pub_years;
	private String [] total_qtys;
	private double [] total_prices;
	private String [] pub_ids;
	private String [] pub_names;
	private String [] book_types;
	public AddCartInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddCartInfo(int uid, String[] book_ids, String[] book_names, String[] pub_years, String[] total_qtys,
			double[] total_prices, String[] pub_ids, String[] pub_names, String[] book_types) {
		super();
		this.uid = uid;
		this.book_ids = book_ids;
		this.book_names = book_names;
		this.pub_years = pub_years;
		this.total_qtys = total_qtys;
		this.total_prices = total_prices;
		this.pub_ids = pub_ids;
		this.pub_names = pub_names;
		this.book_types = book_types;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String[] getBook_ids() {
		return book_ids;
	}
	public void setBook_ids(String[] book_ids) {
		this.book_ids = book_ids;
	}
	public String[] getBook_names() {
		return book_names;
	}
	public void setBook_names(String[] book_names) {
		this.book_names = book_names;
	}
	public String[] getPub_years() {
		return pub_years;
	}
	public void setPub_years(String[] pub_years) {
		this.pub_years = pub_years;
	}
	public String[] getTotal_qtys() {
		return total_qtys;
	}
	public void setTotal_qtys(String[] total_qtys) {
		this.total_qtys = total_qtys;
	}
	public double[] getTotal_prices() {
		return total_prices;
	}
	public void setTotal_prices(double[] total_prices) {
		this.total_prices = total_prices;
	}
	public String[] getPub_ids() {
		return pub_ids;
	}
	public void setPub_ids(String[] pub_ids) {
		this.pub_ids = pub_ids;
	}
	public String[] getPub_names() {
		return pub_names;
	}
	public void setPub_names(String[] pub_names) {
		this.pub_names = pub_names;
	}
	public String[] getBook_types() {
		return book_types;
	}
	public void setBook_types(String[] book_types) {
		this.book_types = book_types;
	}
	
	
}
