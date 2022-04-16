package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.example.demo.entities.OrderItem;
import com.example.demo.repositories.OrderItemRepo;

@Transactional
@Service
public class OrderItemService {
	@Autowired
	OrderItemRepo oItemRepo;
	
	public List<OrderItem> getOrderItems()
	{
		return oItemRepo.findAll();
	}

	public void saveOrderItems(OrderItem o)
	{
		oItemRepo.save(o);
	}
}
