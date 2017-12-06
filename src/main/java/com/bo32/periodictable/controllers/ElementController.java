package com.bo32.periodictable.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bo32.periodictable.entities.Element;
import com.bo32.periodictable.services.ElementService;

@RestController
public class ElementController {
	
	@Autowired
	private ElementService elementService;

	@GetMapping(value="/api/elements/{name}")
	public ResponseEntity<Element> getElementByName(@PathVariable String name) {
		Optional<Element> option = elementService.findByName(name);
		if (option.isPresent()) {
			return new ResponseEntity<Element>(option.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<Element>(HttpStatus.NO_CONTENT);
		}
	}
	
	@GetMapping(value="/api/elements/all")
	public List<Element> getAllElements() {
		return elementService.findAll();
	}
	
	@GetMapping(value="/api/elements")
	public Element getElementByGroupIdAndPeriodId(
			@PathVariable(name="groupId") String groupId,
			@PathVariable(name="periodId") String periodId) {
		
		return elementService.findByGroupAndPeriod(Integer.parseInt(groupId), Integer.parseInt(periodId));
	}
	
	
	
}
