package com.bo32.periodictable.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bo32.periodictable.entities.Group;
import com.bo32.periodictable.repositories.GroupRepository;

@Service
public class GroupService {
	
	@Autowired
	private GroupRepository groupRepository;
	
	public List<Group> findAll() {
		List<Group> result = new ArrayList<Group>();
		groupRepository.findAll().forEach(group -> result.add(group));
		return result;
	}

}
