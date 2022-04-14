package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "publisher_dt")
public class Publisher_dt 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pub_id;
	
    @Column
	private String pub_name;
    
    @JsonIgnoreProperties("publishers")
    @ManyToMany (cascade = {CascadeType.MERGE})
    @JoinTable(name = "book_pub_dt",
              joinColumns = @JoinColumn(name="pub_id"),
              inverseJoinColumns = @JoinColumn(name="bid")
    		)
    private Set<book_dt> books;
    
   /* @ManyToOne
	@JoinColumns ({@JoinColumn(name = "pub_id"),
	               @JoinColumn(name = "Book_type"),
	               @JoinColumn(name = "bid")})
	private Stock_dt stock;*/

	public Publisher_dt() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Publisher_dt(String pub_name) {
		super();
		this.pub_name = pub_name;
	}

	public Publisher_dt(int pub_id, String pub_name) {
		super();
		this.pub_id = pub_id;
		this.pub_name = pub_name;
	}
	
	

	public Publisher_dt(int pub_id, String pub_name, Set<book_dt> books) {
		super();
		this.pub_id = pub_id;
		this.pub_name = pub_name;
		this.books = books;
	}
	
	

	/*public Publisher_dt(int pub_id, String pub_name, Set<book_dt> books, Stock_dt stock) {
		super();
		this.pub_id = pub_id;
		this.pub_name = pub_name;
		this.books = books;
		this.stock = stock;
	}*/

	public Publisher_dt(int pub_id) {
		super();
		this.pub_id = pub_id;
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

	public Set<book_dt> getBooks() {
		return books;
	}

	public void setBooks(Set<book_dt> books) {
		this.books = books;
	}

	/*public Stock_dt getStock() {
		return stock;
	}

	public void setStock(Stock_dt stock) {
		this.stock = stock;
	}
	
    */
}
