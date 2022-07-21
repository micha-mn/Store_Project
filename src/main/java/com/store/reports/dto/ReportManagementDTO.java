package com.store.reports.dto;

import com.store.constant.ErrorConstants;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class ReportManagementDTO {
	@NotNull(message = ErrorConstants.REPORT_CODE_NOT_NULL)
    private String reportCode;
    private String param1;
    private String param2;
    private String param3;
    private String param4;
    private String param5;
}
