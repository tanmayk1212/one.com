package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Publisher_dt;

@Repository
public interface Publisher_dtRepo extends JpaRepository<Publisher_dt, Integer> {

}
