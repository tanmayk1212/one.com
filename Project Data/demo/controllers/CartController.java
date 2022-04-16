package com.example.demo.controllers;

import java.sql.Timestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddCartInfo;
import com.example.demo.entities.Cart;
import com.example.demo.entities.CartInfo;
import com.example.demo.entities.ConOFromCart;
import com.example.demo.entities.ConfirmOrder;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderItem;
import com.example.demo.entities.Publisher_dt;
import com.example.demo.entities.User;
import com.example.demo.entities.book_dt;
import com.example.demo.services.CartInfoService;
import com.example.demo.services.CartService;
import com.example.demo.services.OrderItemService;
import com.example.demo.services.OrderService;
import com.example.demo.services.Publisher_dtService;
import com.example.demo.services.UserService;
import com.example.demo.services.book_dt_service;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class CartController {
	@Autowired
	OrderService oService;
	
	@Autowired
	OrderItemService oItemService;
	
	@Autowired
	CartService cartService;
	
	@Autowired
	book_dt_service bService;
	
	@Autowired
	Publisher_dtService pService;
	
	@Autowired
	UserService uservice;
	
	@Autowired
	CartInfoService cartInfoService;
	
	
	@PostMapping("/confirmOFromCart")
	public String addOrderItems(@RequestBody ConOFromCart conO)
	{
		int n= conO.getBook_ids().length;
		int uid=conO.getUid();
		String del_date=conO.getDel_date();
		String [] a=conO.getBook_ids();
		int [] b=conO.getPub_ids();
		String [] c=conO.getBook_types();
		String [] d=conO.getPub_years();
		double [] e=conO.getTotal_prices();
		int [] f=conO.getTotal_qtys();
		int [] g=conO.getSrnos();
		int h=conO.getCart_id();
		
		double totalPrice=0;
		
		for(int i=0;i<n;i++)
		{
			totalPrice+=e[i]*f[i];
		}
		Date dt=new Date();
		Timestamp cdt=new Timestamp(dt.getTime());
		Order order=new Order(uid,cdt+"",del_date,totalPrice,"Pending");
		oService.saveOrderInfo(order);
		
		for(int i=0;i<n;i++)
		{
			int book_id=Integer.parseInt(a[i]);
			int pubid=b[i];
			int qty=f[i];
			book_dt bdt=bService.getBookById(book_id);
			Publisher_dt pdt=pService.getPubById(pubid);
			Order o=oService.getOrder(uid, cdt+"");
			OrderItem oItem=new OrderItem(bdt,pdt,c[i],d[i],e[i],qty,o);
			//OrderItem oItem=new OrderItem(bid,pubid,c[i],d[i],e[i],qty);
			oItemService.saveOrderItems(oItem);
		}
		
		for(int i=0;i<n;i++)
		{
			cartInfoService.deleteFromCartInfo(g[i]);
		}
		
		
		return "Order placed successfully";
	}
	
	@GetMapping("/deleteFromCartinfo")
	public String deleteFromCartinfo(@RequestParam("sno") int sno)
	{
		cartInfoService.deleteFromCartInfo(sno);
		return "Deleted from cart successfully";
	}
	
	@GetMapping("/getCartDetails")
	public Cart getCartDet(@RequestParam("uid") int u) 
	{
		return cartService.getCart(u);
	}
	
	@GetMapping("/getCarts")
	public List<Cart> getAllCart()
	{
		return cartService.getAllCart();
	}
	
	@GetMapping("/getAllCartsInfo")
	public List<CartInfo> getCartInfo()
	{
		return cartInfoService.getCartInfo();
	}
	
	@GetMapping("/getCartid")
	public String getCartid(@RequestParam("uid") int u)
	{
		return cartService.getCartid(u)+"";
	}
	
	@GetMapping("/deleteCart")
	public String deleteCart(@RequestParam("cid") int c)
	{
		cartService.deleteCart(c);
		return "";
	}
	
	@PostMapping("/addCartInfo")
	public String addCartInfo(@RequestBody AddCartInfo addCart)
	//public String addCartInfo(@RequestBody List<AddCartInfo> addCart)
	{
		int n=addCart.getBook_ids().length;
		int uid=addCart.getUid();
		//User uid = uservice.getUserById(uid);
		String [] a=addCart.getBook_ids();
		String [] b=addCart.getPub_years();
		String [] c=addCart.getTotal_qtys();
		double [] d=addCart.getTotal_prices();
		String [] e=addCart.getPub_ids();
		String [] f=addCart.getBook_types();
		String [] g=addCart.getBook_names();
		String [] h=addCart.getPub_names();
		
		Cart cart=new Cart(uid);
		cartService.saveCartInfo(cart);
		String cid=cartService.getCartid(uid);
		
		for(int i=0;i<n;i++)
		{
			int book_id=Integer.parseInt(a[i]);
			int pubid=Integer.parseInt(e[i]);
			int qty=Integer.parseInt(c[i]);
			Cart ct=cartService.getCartById(Integer.parseInt(cid));
			book_dt bdt=bService.getBookById(book_id);
			Publisher_dt pdt=pService.getPubById(pubid);
			
			CartInfo cartInfo=new CartInfo(bdt,pdt,f[i],b[i],d[i],qty,ct);
			
			cartInfoService.saveCartInf(cartInfo);
		}
		
		
		return "Books added to the cart successfully";
		
	}
	
	@GetMapping("/getAllCarts")
	public List<Cart> getAllCarts()
	{
		return cartService.getAllCart();
	}
	

}
