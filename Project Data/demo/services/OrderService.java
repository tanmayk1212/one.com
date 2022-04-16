package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepo;

@Transactional
@Service
public class OrderService {
	
	@Autowired
	private OrderRepo oRepo;
	
	
	
	public List<Order> getAllOrders()
	{
		return oRepo.findAll();	
	}
	
	public Order getOrder(int uid, String oDate)
	{
		return oRepo.getOrder(uid,oDate);
	}
	
	public void saveOrderInfo(Order o)
	{
		oRepo.save(o);
	}
	
	public List<Order> getAllOrders(int uid)
	{
		return oRepo.getAllOrders(uid);
	}
	
	public void updateStatus(int oid, String status)
	{
		oRepo.updateStatus(oid, status);
	}
	

}
