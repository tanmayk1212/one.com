package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.StockId;
import com.example.demo.entities.Stock_dt;
import com.example.demo.entities.book_dt;

@Repository
public interface Stock_Repo extends JpaRepository<Stock_dt, StockId> {
	
	@Query("select s from Stock_dt s where s.bid in :bdts and s.pubid=:p and s.Book_type=:btp")
	public List<Stock_dt> findStocks(List<Integer> bdts, int p, String btp);

}
