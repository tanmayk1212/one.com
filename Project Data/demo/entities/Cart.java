package com.example.demo.entities;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="cart")
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cart_id;
	
	
	@Column
	private int user_id;
	
	@JsonIgnoreProperties("cart")
	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
	private Set<CartInfo> cartInf;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(int user_id, Set<CartInfo> cartInf) {
		super();
		this.user_id = user_id;
		this.cartInf = cartInf;
	}

	public Cart(int user_id) {
		super();
		this.user_id = user_id;
	}

	public Cart(int cart_id, int user_id) {
		super();
		this.cart_id = cart_id;
		this.user_id = user_id;
	}

	public Cart(int cart_id, int user_id, Set<CartInfo> cartInf) {
		super();
		this.cart_id = cart_id;
		this.user_id = user_id;
		this.cartInf = cartInf;
	}

	public int getCart_id() {
		return cart_id;
	}

	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Set<CartInfo> getCartInf() {
		return cartInf;
	}

	public void setCartInf(Set<CartInfo> cartInf) {
		this.cartInf = cartInf;
	}

	
	
}
