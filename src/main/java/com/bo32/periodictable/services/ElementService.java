package com.bo32.periodictable.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bo32.periodictable.entities.Element;
import com.bo32.periodictable.repositories.ElementRepository;

@Service
public class ElementService {
	
	@Autowired
	private ElementRepository elementRepository;
	
	public List<Element> findAll() {
		List<Element> result = new ArrayList<Element>();
		elementRepository.findAllByOrderByIdAsc().forEach(e -> {
//			Hibernate.initialize(e.getGroup());
//			Hibernate.initialize(e.getPeriod());
			result.add(e);
		});
		return result;
	}

	public Optional<Element> findByName(String name) {
		return elementRepository.findByNameIgnoreCase(name);
	}

	public Element findByGroupAndPeriod(int groupId, int periodId) {
		return elementRepository.findByGroupAndPeriod(groupId, periodId);
	}

}
