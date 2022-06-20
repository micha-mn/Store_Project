package com.store.controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value="store")
public class StoreController {

	@RequestMapping(value="/home")
	public ModelAndView mainPage(ModelMap model) {
		return new ModelAndView("html/index");
	}
	@RequestMapping(value="/supplier")
	public ModelAndView supplierTablesPage(ModelMap model) {
		return new ModelAndView("html/supplier_tables");
	}
	@RequestMapping(value="/client")
	public ModelAndView clientTablesPage(ModelMap model) {
		return new ModelAndView("html/client_tables");
	}
	@RequestMapping(value="/items")
	public ModelAndView itemsTablesPage(ModelMap model) {
		return new ModelAndView("html/items_tables");
	}
	@RequestMapping(value="/sales")
	public ModelAndView salesTablesPage(ModelMap model) {
		return new ModelAndView("html/sales_tables");
	}
}
