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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.resource.beans.internal.FallbackBeanInstanceProducer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "book_dt")
public class book_dt 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
	
	@Column
	private String book_title;
	
	@Column
	private int semester;
	
	@JsonIgnoreProperties("book_dt ")  // for course
	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course_dt course_id;
	
	@JsonIgnoreProperties("books")           // for many to many mapping between book and publisher
	@ManyToMany (cascade = {CascadeType.MERGE})
    @JoinTable(name = "book_pub_dt",
              joinColumns = @JoinColumn(name="bid"),
              inverseJoinColumns = @JoinColumn(name="pub_id")
    		)
	private Set<Publisher_dt> publishers;
	
	
    /* @OneToMany
	@JoinColumns ({@JoinColumn(name = "pub_id"),
	               @JoinColumn(name = "Book_type"),
	               @JoinColumn(name = "bid",insertable = false, updatable = false)})
	private Stock_dt stock;
*/
	public book_dt() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public book_dt(String book_title, int semester, Course_dt course_id) {
		super();
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
	}



	public book_dt( String book_title, int semester) {
		super();
		
		this.book_title = book_title;
		this.semester = semester;
	}

	public book_dt(int bid, String book_title, int semester, Course_dt course_id) {
		super();
		this.bid = bid;
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
	}
	
	

	public book_dt(int bid, String book_title) {
		super();
		this.bid = bid;
		this.book_title = book_title;
	}



	public book_dt(int bid, String book_title, int semester, Course_dt course_id, Set<Publisher_dt> publishers) {
		super();
		this.bid = bid;
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
		this.publishers = publishers;
	}



	public book_dt(String book_title, int semester, Course_dt course_id, Set<Publisher_dt> publishers) {
		super();
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
		this.publishers = publishers;
	}



	/*public book_dt(int bid, String book_title, int semester, Course_dt course_id, Set<Publisher_dt> publishers,
			Stock_dt stock) {
		super();
		this.bid = bid;
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
		this.publishers = publishers;
		this.stock = stock;
	}


	public book_dt(String book_title, int semester, Course_dt course_id, Set<Publisher_dt> publishers, Stock_dt stock) {
		super();
		this.book_title = book_title;
		this.semester = semester;
		this.course_id = course_id;
		this.publishers = publishers;
		this.stock = stock;
	}
*/

	public book_dt(int bid) {
		super();
		this.bid = bid;
	}



	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBook_title() {
		return book_title;
	}

	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public Course_dt getCourse_id() {
		return course_id;
	}

	public void setCourse_id(Course_dt course_id) {
		this.course_id = course_id;
	}



	public Set<Publisher_dt> getPublishers() {
		return publishers;
	}



	public void setPublishers(Set<Publisher_dt> publishers) {
		this.publishers = publishers;
	}



/* public Stock_dt getStock() {
		return stock;
	}



	public void setStock(Stock_dt stock) {
		this.stock = stock;
	}

	*/

}
