package com.store.reports.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.reports.domain.ReportManagement;
import com.store.reports.repository.ReportManagementRepository;

@Service
public class ReportManagementService {

	
	@Autowired
	ReportManagementRepository reportManagementRepository;
	
	public ReportManagement getReportByCode(String reportCode)
	{
		return reportManagementRepository.findByReportCode(reportCode);
	}

	public void saveReport(ReportManagement reportInfo) {
		
		reportManagementRepository.save(reportInfo);
	}

}
