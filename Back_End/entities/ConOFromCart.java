package com.example.demo.entities;

public class ConOFromCart {
	private int uid;
	private String del_date;
	private String [] book_ids;
	private int [] pub_ids;
	private String [] book_types;
	private String [] pub_years;
	private double [] total_prices;
	private int [] total_qtys;
	private int [] srnos;
	private int cart_id;
	public ConOFromCart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ConOFromCart(int uid, String del_date, String[] book_ids, int[] pub_ids, String[] book_types,
			String[] pub_years, double[] total_prices, int[] total_qtys, int[] srnos, int cart_id) {
		super();
		this.uid = uid;
		this.del_date = del_date;
		this.book_ids = book_ids;
		this.pub_ids = pub_ids;
		this.book_types = book_types;
		this.pub_years = pub_years;
		this.total_prices = total_prices;
		this.total_qtys = total_qtys;
		this.srnos = srnos;
		this.cart_id = cart_id;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getDel_date() {
		return del_date;
	}
	public void setDel_date(String del_date) {
		this.del_date = del_date;
	}
	public String[] getBook_ids() {
		return book_ids;
	}
	public void setBook_ids(String[] book_ids) {
		this.book_ids = book_ids;
	}
	public int[] getPub_ids() {
		return pub_ids;
	}
	public void setPub_ids(int[] pub_ids) {
		this.pub_ids = pub_ids;
	}
	public String[] getBook_types() {
		return book_types;
	}
	public void setBook_types(String[] book_types) {
		this.book_types = book_types;
	}
	public String[] getPub_years() {
		return pub_years;
	}
	public void setPub_years(String[] pub_years) {
		this.pub_years = pub_years;
	}
	public double[] getTotal_prices() {
		return total_prices;
	}
	public void setTotal_prices(double[] total_prices) {
		this.total_prices = total_prices;
	}
	public int[] getTotal_qtys() {
		return total_qtys;
	}
	public void setTotal_qtys(int[] total_qtys) {
		this.total_qtys = total_qtys;
	}
	public int[] getSrnos() {
		return srnos;
	}
	public void setSrnos(int[] srnos) {
		this.srnos = srnos;
	}
	public int getCart_id() {
		return cart_id;
	}
	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}
	
	

}
