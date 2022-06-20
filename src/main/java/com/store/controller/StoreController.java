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
		return new ModelAndView("html/dashboard");
	}
}
