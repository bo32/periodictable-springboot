package com.bo32.periodictable.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bo32.periodictable.entities.Period;

@Repository
public interface PeriodRepository extends CrudRepository<Period, Integer> {

}
