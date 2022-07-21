package com.store.reports.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.reports.domain.ReportManagement;

public interface ReportManagementRepository  extends JpaRepository<ReportManagement, Long> {

	ReportManagement findByReportCode(String reportCode);

}
