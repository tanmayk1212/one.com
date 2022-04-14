package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CustomerSellReq;
import com.example.demo.entities.User;

@Repository
public interface CustomerSellReqRepo extends JpaRepository<CustomerSellReq , Integer> {
	@Query("select u from CustomerSellReq u where u.userid=?1 ")
	public  CustomerSellReq getreqbyuid(int userid);
}
