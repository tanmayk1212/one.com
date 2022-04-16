package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Cart;
@Transactional
@Repository
public interface CartRepo extends JpaRepository<Cart, Integer> {

	@Query("select c from Cart c where c.user_id=?1")
	public Cart getCart(int uid);
	
	@Query("select c.cart_id from Cart c where c.user_id=?1")
	public String getCartid(int uid);
	
	@Modifying
	@Query(value="delete from cart where cart_id=?1",nativeQuery=true)
	public void deleteCart(int id);
}
