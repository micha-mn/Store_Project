package com.store.reports.util;

import java.beans.PropertyEditorSupport;

import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.reports.dto.ReportManagementDTO;

public class ReportManagementEditor extends PropertyEditorSupport {
	private ObjectMapper objectMapper;
	
	public ReportManagementEditor(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        if (StringUtils.isEmpty(text)) {
            setValue(null);
        } else {
        	ReportManagementDTO report = new ReportManagementDTO();
            try {
            	report = objectMapper.readValue(text, ReportManagementDTO.class);
            } catch (JsonProcessingException e) {
                throw new IllegalArgumentException(e);
            }
            setValue(report);
        }
    }
}
