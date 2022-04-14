package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.entities.CartInfo;
import com.example.demo.repositories.CartInfoRepo;

@Service
public class CartInfoService {

	@Autowired
	CartInfoRepo cartInfRepo;
	
	public List<CartInfo> getCartInfo()
	{
		return cartInfRepo.findAll();
	}
	
	public void updateCartInfo(Cart c)
	{
		cartInfRepo.updateCartInfo(c);
	}
	
	public void saveCartInf(CartInfo c)
	{
		cartInfRepo.save(c);
	}
	
	public void deleteFromCartInfo(int sno)
	{
		cartInfRepo.deleteFromCart(sno);
	}
}
