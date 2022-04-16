package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Course_dt;

@Repository
public interface Course_Repo extends JpaRepository<Course_dt, Integer> {

}
