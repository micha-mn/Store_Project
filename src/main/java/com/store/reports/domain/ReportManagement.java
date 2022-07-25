package com.store.reports.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "report_management")
public class ReportManagement {
	@Id
    @GeneratedValue
    private Long id;
	@Column(length=40)
    private String reportCode;
	@Column(length=40)
    private String reportName;
	@Column(length=60)
    private String reportJrxmlPath;
	@Column(length=60)
	private String reportJasperPath;
	@Column(length=60)
    private String staticPath;
	@Column(length=40)
    private Long parameterCounter;
	@Column(length=40)
    private String param1;
	@Column(length=40)
    private String param2;
	@Column(length=40)
    private String param3;
	@Column(length=40)
    private String param4;
	@Column(length=40)
    private String param5;
}
