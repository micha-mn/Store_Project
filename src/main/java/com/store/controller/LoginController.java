package com.store.controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value="retail")
public class LoginController {

	@RequestMapping(value="/login")
	public ModelAndView loginPage(ModelMap model) {
		return new ModelAndView("html/login");
	}
	@RequestMapping(value="/supplier")
	public ModelAndView supplierTablesPage(ModelMap model) {
		return new ModelAndView("html/supplier_tables");
	}
}
