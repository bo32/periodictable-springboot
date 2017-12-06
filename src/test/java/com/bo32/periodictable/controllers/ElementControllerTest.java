package com.bo32.periodictable.controllers;

import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.bo32.periodictable.entities.Element;
import com.bo32.periodictable.services.ElementService;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ElementController.class)
public class ElementControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private ElementService elementService;
	
	@Test
	public void testGetElement() throws Exception {
		String elementName = "hydrogen";
		Element hydrogen = new Element();
		hydrogen.setAtomicNumber(1);
		hydrogen.setName(elementName);
		
		when(elementService.findByName(anyString())).thenReturn(Optional.ofNullable(null));
		mockMvc.perform(get("/api/elements/carbon"))
//			.andDo(print())
			.andExpect(status().isNoContent())
		;
		
		when(elementService.findByName(elementName)).thenReturn(Optional.of(hydrogen));
		mockMvc.perform(get("/api/elements/" + elementName))
//			.andDo(print())
			.andExpect(status().isOk())
		;
	}
}
