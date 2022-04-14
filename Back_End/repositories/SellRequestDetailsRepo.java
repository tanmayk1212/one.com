package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.SellRequestDetails;

@Transactional
@Repository
public interface SellRequestDetailsRepo extends JpaRepository<SellRequestDetails, Integer> {
	
	@Modifying
	@Query(value = "update request_details  set status =?2 where sr_no=?1",nativeQuery = true)
	public int  assignmantstatus(int sr_id,  String status) ;
}
