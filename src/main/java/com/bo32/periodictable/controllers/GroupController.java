package com.bo32.periodictable.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bo32.periodictable.entities.Element;
import com.bo32.periodictable.entities.Group;
import com.bo32.periodictable.services.GroupService;

@RestController
public class GroupController {

	@Autowired
	private GroupService groupService;
	
	@GetMapping(value="/api/groups")
	public List<Group> getAllGroups() {
		List<Group> groups = groupService.findAll();
		for(Group g: groups) {
			g.setElements(new ArrayList<Element>());
		}
		return groups;
	}
	
}
