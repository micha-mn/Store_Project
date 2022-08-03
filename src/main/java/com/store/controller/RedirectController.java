package com.store.controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value="retail")
public class RedirectController {

	@RequestMapping(value="/login")
	public ModelAndView loginPage(ModelMap model) {
		return new ModelAndView("html/login");
	}
	@RequestMapping(value="/supplier")
	public ModelAndView supplierTablesPage(ModelMap model) {
		return new ModelAndView("html/supplier_tables");
	}
	@RequestMapping(value="/client")
	public ModelAndView clientTablesPage(ModelMap model) {
		return new ModelAndView("html/client_tables");
	}
	@RequestMapping(value="/item")
	public ModelAndView itemTablesPage(ModelMap model) {
		return new ModelAndView("html/item_tables");
	}
	@RequestMapping(value="/sales")
	public ModelAndView salesTablesPage(ModelMap model) {
		return new ModelAndView("html/sales_tables");
	}
}
