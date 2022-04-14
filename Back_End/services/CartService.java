package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Cart;
import com.example.demo.repositories.CartRepo;

@Transactional
@Service
public class CartService {
	
	@Autowired
	CartRepo cartRepo;
	
	public Cart getCart(int u)
	{
		return cartRepo.getCart(u);
	}
	
	public List<Cart> getAllCart()
	{
		return cartRepo.findAll();	
	}
	
	public String getCartid(int uid)
	{
		return cartRepo.getCartid(uid);
	}
	
	public void saveCartInfo(Cart c)
	{
		cartRepo.save(c);
	}
	
	public Cart getCartById(int cid)
	{
		return cartRepo.findById(cid).get();
	}
	
	public void deleteCart(int id)
	{
		cartRepo.deleteCart(id);
	}
	

}
