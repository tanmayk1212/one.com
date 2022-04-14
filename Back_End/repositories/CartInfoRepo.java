package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Cart;
import com.example.demo.entities.CartInfo;
@Transactional
@Repository
public interface CartInfoRepo extends JpaRepository<CartInfo, Integer> {
	
	@Query("update CartInfo c set c.cart=?1")
	public void updateCartInfo(Cart c);
	
	@Modifying
	@Query(value="delete from cart_info where srno=?1",nativeQuery=true)
	public void deleteFromCart(int sno);

}
