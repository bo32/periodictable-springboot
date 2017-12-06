package com.bo32.periodictable.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="element")
public class Element {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Column(name="atomic_number", unique=true)
	private Integer atomicNumber;
	
	@Column(name="name", unique=true)
	private String name;
	
	@Column(name="symbol", unique=true)
	private String symbol;
	
	@Column(name="atomicmass")
	private double atomicMass;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="groupid", nullable=true)
//	@JsonIgnore
	private Group group;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="periodid", nullable=true)
//	@JsonIgnore
	private Period period;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="stateId", nullable=false)
	private State state;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="metalId", nullable=false)
	private Metal metal;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getSymbol() {
		return symbol;
	}
	
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	
	public Integer getAtomicNumber() {
		return atomicNumber;
	}
	
	public void setAtomicNumber(Integer atomicNumber) {
		this.atomicNumber = atomicNumber;
	}
	
	public Group getGroup() {
		return group;
	}
	
	public void setGroup(Group group) {
		this.group = group;
	}
	
	public Period getPeriod() {
		return period;
	}
	
	public void setPeriod(Period period) {
		this.period = period;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public Metal getMetal() {
		return metal;
	}

	public void setMetal(Metal metal) {
		this.metal = metal;
	}

	public double getAtomicMass() {
		return atomicMass;
	}

	public void setAtomicMass(double atomicMass) {
		this.atomicMass = atomicMass;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
