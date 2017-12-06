package com.bo32.periodictable.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="properties")
public class Properties {
	
	@Id
	private int id;
	
	@Column(name="label")
	private String label;
	
	@Column(name="standardstate")
	private String standardState;

}
