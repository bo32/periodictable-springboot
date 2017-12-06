package com.bo32.periodictable.entities;

import java.util.List;

public class PeriodicTable  {

	
	private String description;
	private List<Group> groups;
	private List<Period> periods;
	private List<Element> elements;

	public PeriodicTable() {
		description = "Tabular arrangement of the chemical elements. Created by Dmitrii Mendeleev.";
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	public List<Group> getGroups() {
		return groups;
	}

	public void setGroups(List<Group> groups) {
		this.groups = groups;
	}

	public List<Period> getPeriods() {
		return periods;
	}
	
	public void setPeriods(List<Period> periods) {
		this.periods = periods;
	}

	public void setElements(List<Element> elements) {
		this.elements = elements;
	}
	
	public List<Element> getElements() {
		return elements;
	}
}
