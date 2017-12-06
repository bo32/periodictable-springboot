package com.bo32.periodictable.controllers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.bo32.periodictable.entities.Group;
import com.bo32.periodictable.entities.Period;
import com.bo32.periodictable.services.ElementService;
import com.bo32.periodictable.services.GroupService;
import com.bo32.periodictable.services.PeriodService;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(PeriodicTableController.class)
public class PeriodicTableControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private GroupService groupService;
	@MockBean
	private PeriodService periodService;
	@MockBean
	private ElementService elementService;
	
	@Test
	public void testGetPeriodicTable() throws Exception {
//		Group g = new Group();
//		
//		List<Group> groups = 
		when(groupService.findAll()).thenReturn(new ArrayList<Group>());
		
		mockMvc.perform(get("/api/table"))
			.andExpect(status().isOk())
//			.andExpect(jsonPath("$.groups[0].name", is("Alkalin metals")))
			;
	}
	
	@Test
	public void testGetPeriodicTablePerPeriods() throws Exception { 
		when(periodService.findAll()).thenReturn(new ArrayList<Period>());
		
		mockMvc.perform(get("/api/table/periods"))
			.andExpect(status().isOk())
			;
	}
}
