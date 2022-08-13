package com.store.reports.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.enums.FailureEnum;
import com.store.reports.dto.ReportManagementDTO;
import com.store.reports.util.ReportManagementEditor;
import com.store.reports.util.ReportManagementUtil;
import com.store.utils.ValidationUtils;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value="report")
public class ReportManagementController extends ValidationUtils{
	String serviceName="Report Management";
	 @Autowired
	 ReportManagementUtil reportManagementUtil;

	 private ObjectMapper objectMapper;
	 @Autowired
	    public void setObjectMapper(ObjectMapper objectMapper) {
	        this.objectMapper = objectMapper;
	    }
	 
	 @InitBinder
	 public void initBinder(WebDataBinder binder) {
	     binder.registerCustomEditor(ReportManagementDTO.class, new ReportManagementEditor(objectMapper));
	 }
	 
	 @GetMapping("/generatereport/{reportCode}/{id}")
		public ResponseEntity<?> generateReport(@PathVariable("reportCode") String reportCode,@PathVariable("id") String id ,HttpServletResponse response) {
		 ReportManagementDTO reportManagementDTO = ReportManagementDTO.builder().reportCode(reportCode).param1(id).build();
			try {
				reportManagementUtil.exportToPdf(reportManagementDTO,response);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
	 @GetMapping("/generatereport")
		public ResponseEntity<?> generateReports(@RequestParam ReportManagementDTO reportManagementDTO,HttpServletResponse response)throws JsonMappingException, JsonProcessingException {
			try {
				reportManagementUtil.exportReport(reportManagementDTO,response);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
	 @PostMapping("/generatereport")
		public String generateReport(@RequestBody @Valid ReportManagementDTO reportManagementDTO, BindingResult bindingResult,HttpServletResponse response) {
			validateBindingResults(bindingResult, FailureEnum.INVALID_REPORT_INFO, serviceName);	
			try {
				reportManagementUtil.exportToPdf(reportManagementDTO,response);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
}
