package com.example.demo.controllers;

import java.sql.Timestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.ConfirmOrder;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderItem;
import com.example.demo.entities.OrderStatus;
import com.example.demo.entities.Publisher_dt;
import com.example.demo.entities.book_dt;
import com.example.demo.services.OrderItemService;
import com.example.demo.services.OrderService;
import com.example.demo.services.Publisher_dtService;
import com.example.demo.services.book_dt_service;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class OrderController {
	@Autowired
	OrderService oService;
	
	@Autowired
	book_dt_service bService;
	
	@Autowired
	Publisher_dtService pService;
	
	@Autowired
	OrderItemService oItemService;
	
	@PostMapping("/updateStatus")
	public String updateStatus(@RequestBody OrderStatus o)
	{
		 oService.updateStatus(o.getOid(), o.getStatus());
		 return "Order status updated successfully";
	}

	@PostMapping("/confirmOrder")
	public String addOrderItems(@RequestBody ConfirmOrder conOrder)
	{
		int n= conOrder.getBook_ids().length;
		int uid=conOrder.getUid();
		String del_date=conOrder.getDel_date();
		String [] a=conOrder.getBook_ids();
		String [] b=conOrder.getPub_ids();
		String [] c=conOrder.getBook_types();
		String [] d=conOrder.getPub_years();
		double [] e=conOrder.getTotal_prices();
		String [] f=conOrder.getTotal_qtys();
		double totalPrice=0;
		
		for(int i=0;i<n;i++)
		{
			int qty=Integer.parseInt(f[i]);
			totalPrice+=e[i]*qty;
		}
		Date dt=new Date();
		Timestamp cdt=new Timestamp(dt.getTime());
		Order order=new Order(uid,cdt+"",del_date,totalPrice,"Pending");
		oService.saveOrderInfo(order);
		for(int i=0;i<n;i++)
		{
			int book_id=Integer.parseInt(a[i]);
			int pubid=Integer.parseInt(b[i]);
			int qty=Integer.parseInt(f[i]);
			book_dt bdt=bService.getBookById(book_id);
			Publisher_dt pdt=pService.getPubById(pubid);
			Order o=oService.getOrder(uid, cdt+"");
			OrderItem oItem=new OrderItem(bdt,pdt,c[i],d[i],e[i],qty,o);
			//OrderItem oItem=new OrderItem(bid,pubid,c[i],d[i],e[i],qty);
			oItemService.saveOrderItems(oItem);
		}
		
		return "Order placed successfully";
	}
	
	@GetMapping("/getAllOrders")
	public List<Order> getAllOrders()
	{
		List<Order> l=oService.getAllOrders();
		for(Order o: l)
		{
			System.out.println(o.getOid());
		}
		return oService.getAllOrders();
	}
	
	
}
