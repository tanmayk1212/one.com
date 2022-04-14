package com.example.demo.services;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
@Transactional
@Service
public class UserService {
	@Autowired
	UserRepo urepo;
	
	public User saveUser(User u)
	{
		return urepo.save(u);
	}
	
	public List<User> getAllUser()
	{
		return urepo.findAll();
	}
	
	public String getRole(String username, String Password)
	{
		return urepo.getRole(username, Password);
	}
	
	public User getUser(String username,String password)
	{
		return urepo.getUser(username, password);
	}
	
	public User getUserById(int id)
	{
		return urepo.findById(id).get();
	}

}
