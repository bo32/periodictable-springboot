package com.bo32.periodictable.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bo32.periodictable.entities.Period;
import com.bo32.periodictable.services.PeriodService;

@RestController
public class PeriodController {
	
	@Autowired
	private PeriodService periodService;
	
	@GetMapping(value="/api/periods")
	public List<Period> getAllPeriods() {
		return periodService.findAll();
	}

}
