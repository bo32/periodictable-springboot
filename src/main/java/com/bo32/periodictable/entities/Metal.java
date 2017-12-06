package com.bo32.periodictable.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="metal")
public class Metal {
	
	@Id
	@Column(name="metalid")
	private int metalId;
	
	@Column(name="label")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String label;
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="metal")
	@JsonIgnore
	private List<Element> elements;
	
//	@Column(name="parent")
//	@ManyToOne(fetch=FetchType.LAZY)
//	@JoinColumn(name="metalId", nullable=false)
//	private Metal parent;

	public int getMetalId() {
		return metalId;
	}

	public void setMetalId(int metalId) {
		this.metalId = metalId;
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
