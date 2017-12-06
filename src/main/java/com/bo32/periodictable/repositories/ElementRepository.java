package com.bo32.periodictable.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bo32.periodictable.entities.Element;

@Repository
public interface ElementRepository extends CrudRepository<Element, Integer> {

	Optional<Element> findByNameIgnoreCase(String name);
	
	Element findByGroupAndPeriod(int group, int period);
	
	List<Element> findAllByOrderByAtomicNumberAsc();
	
	List<Element> findAllByOrderByIdAsc();

}
