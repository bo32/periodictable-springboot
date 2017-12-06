package com.bo32.periodictable.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bo32.periodictable.entities.Period;
import com.bo32.periodictable.repositories.PeriodRepository;

@Service
public class PeriodService {
	
	@Autowired
	private PeriodRepository periodRepository;
	
	public List<Period> findAll() {
		List<Period> result = new ArrayList<Period>();
		periodRepository.findAll().forEach(period -> {
			result.add(period);
		});
		
		
		return result;
	}

}
