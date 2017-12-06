package com.bo32.periodictable.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="state")
public class State {
		
//	public static final String GAS = "Gas";
//	public static final String LIQUID = "Liquid";
//	public static final String SOLID = "Solid";
//	public static final String SYNTHETIC = "Synthetic";
	
	@Id
	@Column(name="stateid")
	private int stateId;
	
	@Column(name="label")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String label;
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="state")
	@JsonIgnore
	private List<Element> elements;

	public int getStateId() {
		return stateId;
	}

	public void setStateId(int stateId) {
		this.stateId = stateId;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public List<Element> getElements() {
		return elements;
	}

	public void setElements(List<Element> elements) {
		this.elements = elements;
	}

}
