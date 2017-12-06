package com.bo32.periodictable.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="tablegroup")
public class Group {

	@Id
	@Column(name="index")
	private int index;
	
	@Column(name="name")
	private String name;
	
	@Column(name="namebyelement")
	private String nameByElement;
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="group")
	@JsonIgnore
	private List<Element> elements;

	public int getIndex() {
		return index;
	}
	
	public void setIndex(int index) {
		this.index = index;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getNameByElement() {
		return nameByElement;
	}

	public void setNameByElement(String nameByElement) {
		this.nameByElement = nameByElement;
	}

	public List<Element> getElements() {
		return elements;
	}

	public void setElements(List<Element> elements) {
		this.elements = elements;
	}
	
}
