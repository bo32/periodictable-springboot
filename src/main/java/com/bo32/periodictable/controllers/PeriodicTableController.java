package com.bo32.periodictable.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bo32.periodictable.entities.Element;
import com.bo32.periodictable.entities.Group;
import com.bo32.periodictable.entities.Period;
import com.bo32.periodictable.entities.PeriodicTable;
import com.bo32.periodictable.services.ElementService;
import com.bo32.periodictable.services.GroupService;
import com.bo32.periodictable.services.PeriodService;

@RestController
public class PeriodicTableController {

	@Autowired
	private GroupService groupService;
	
	@Autowired
	private PeriodService periodService;
	
	@Autowired
	private ElementService elementService;
	
	@GetMapping(value="/api/table", produces="application/json")
	public PeriodicTable getPeriodicTable() {
		PeriodicTable table = new PeriodicTable();
		List<Element> allElements = elementService.findAll();
		table.setElements(allElements);
		
		return table;
	}
	
	@GetMapping(value="/api/table/groups", produces="application/json")
	public PeriodicTable getPeriodicTablePerGroups() {
		PeriodicTable table = new PeriodicTable();
		List<Group> groups = groupService.findAll();
		table.setGroups(groups);
		
		return table;
	}
	
	@GetMapping(value="/api/table/periods", produces="application/json")
	public PeriodicTable getPeriodicTablePerPeriods() {
		PeriodicTable table = new PeriodicTable();
		List<Period> periods = periodService.findAll();
		table.setPeriods(periods);
		
		return table;
	}
}
