package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.*;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	@Query("select u.utype from User u where u.username=?1 and u.password=?2")
	public String getRole(String username, String password);
	
	@Query("select u from User u where u.username=?1 and u.password=?2")
	public  User getUser(String username,String password);

}
