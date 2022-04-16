package com.example.demo.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Sec_q;
import com.example.demo.entities.User;
import com.example.demo.entities.User_Reg;
import com.example.demo.services.Seq_qService;
import com.example.demo.services.UserService;

@CrossOrigin(value = {"http://localhost:3000"})
@Transactional
@RestController
public class UserController {
	@Autowired
	UserService u_ser;
	
	@Autowired 
	Seq_qService sqser;
	
	@PostMapping("/saveUser")
	public User saveU(@RequestBody User_Reg ur)
	{
		Sec_q q= sqser.getQ(ur.getSec_q());
		User u= new User(ur.getFname(),ur.getLname(),ur.getEmail(),ur.getUsername(),ur.getPassword(),q,ur.getAnswer(),ur.getContactno(),ur.getAddress());
		return u_ser.saveUser(u);
	}
	
	@GetMapping("/getAllu")
	public List<User> getAllU()
	{
		return u_ser.getAllUser();
	}
	
	@GetMapping("/getAllsq")
	public List<Sec_q> getAllsq()
	{
		return sqser.getSecq();
	}
	
	@PostMapping("/getUser")
	public User checkLogin(@RequestBody Login l) {
		
	return	u_ser.getUser(l.getUsername(), l.getPassword());
	}

     @PostMapping("/getRole")
	public String getRole(@RequestBody User u) {
	
		return u_ser.getRole(u.getUsername(), u.getPassword());
	}
     
    @GetMapping("/getUserById") 
    public User getUserById(@RequestParam("uid") int id)
    {
    	 return u_ser.getUserById(id);
    }
    
}
