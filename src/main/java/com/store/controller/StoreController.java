package com.store.controller;

import java.io.IOException;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value="store")
public class StoreController {

	@RequestMapping(value="/login")
	public ModelAndView loginPage(ModelMap model) {
		return new ModelAndView("html/login");
	}

	
	  @RequestMapping(value="/home") public ModelAndView mainPage(ModelMap model) {
	  return new ModelAndView("html/index"); }
	 
	
	/*
	 * @RequestMapping(value = "/home") protected ModelAndView
	 * mainPage(@RequestHeader(value = "Authorization", required=false) String
	 * credentials) throws IOException { return new ModelAndView("html/index"); }
	 */
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
