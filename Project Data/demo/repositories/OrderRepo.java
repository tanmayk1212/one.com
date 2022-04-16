package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Order;
@Transactional
@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

	@Query("select o from Order o where o.u_id=?1 and o.order_date=?2")
	public Order getOrder(int uid, String oDate);
	
	@Query("select o from Order o where o.u_id=?1")
	public List<Order> getAllOrders(int uid);
	
	@Modifying
	@Query(value="update orders set order_status=?2 where oid=?1",nativeQuery=true)
	public void updateStatus(int oid, String status);
}
