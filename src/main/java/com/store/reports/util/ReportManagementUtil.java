package com.store.reports.util;

import java.io.File;
import java.io.OutputStream;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.store.reports.domain.ReportManagement;
import com.store.reports.dto.ReportManagementDTO;
import com.store.reports.service.ReportManagementService;

import jakarta.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.util.JRSaver;

@Service
public class ReportManagementUtil {

	@Autowired
	JdbcTemplate jdbcTemplate; 

	@Autowired
	ReportManagementService reportManagementService;  
	
	public JasperPrint getJasperRepoortPrint(ReportManagementDTO reportManagementDTO) {
		  JasperPrint jasperPrint = null;
		try {
      	Connection connection = jdbcTemplate.getDataSource().getConnection();
      	ReportManagement reportInfo = reportManagementService.getReportByCode(reportManagementDTO.getReportCode());
      	
      	JasperReport jasperReport;
      	String CompiledjasperReport = null;
		if(reportInfo.getReportJasperPath() == null)
      	{ jasperReport = JasperCompileManager.compileReport(new File("").getAbsolutePath()
                  + reportInfo.getReportJrxmlPath());
      	
      	 JRSaver.saveObject(jasperReport,new File("").getAbsolutePath()
                 + "\\src\\main\\resources\\static\\report\\"+reportInfo.getReportName()+".jasper");
      	 
      	reportInfo.setReportJasperPath("\\src\\main\\resources\\static\\report\\"+reportInfo.getReportName()+".jasper");
      	CompiledjasperReport =  new File("").getAbsolutePath() + "\\src\\main\\resources\\static\\report\\"+reportInfo.getReportName()+".jasper";
      	reportManagementService.saveReport(reportInfo);
      	}
      	else 
      	 CompiledjasperReport = new File("").getAbsolutePath() + reportInfo.getReportJasperPath();
        
         
          Map<String, Object> parameters = new HashMap<>();
          for (int i = 1; i <= reportInfo.getParameterCounter(); ++i) {
          	if (i==1)
          	parameters.put(reportInfo.getParam1(), reportManagementDTO.getParam1());
          	else if (i==2)
          		parameters.put(reportInfo.getParam2(), reportManagementDTO.getParam2());
          	else if (i==3)
          		parameters.put(reportInfo.getParam3(), reportManagementDTO.getParam3());
          	else if (i==4)
          		parameters.put(reportInfo.getParam4(), reportManagementDTO.getParam4());
          	else if (i==5)
          		parameters.put(reportInfo.getParam5(), reportManagementDTO.getParam5());
           }
          

           jasperPrint = JasperFillManager.fillReport(CompiledjasperReport, parameters,
                  connection);

          return jasperPrint; 
         
      } catch (Exception e) {
          e.printStackTrace();
      
      }
		
		return jasperPrint; 
  }
	
	public void exportToPdf(ReportManagementDTO reportManagementDTO, HttpServletResponse response) throws Exception {
        OutputStream outputStream = response.getOutputStream();
      
        try {
            response.setContentType("application/pdf");
            JasperPrint jasperPrint = getJasperRepoortPrint(reportManagementDTO);
            JasperExportManager.exportReportToPdfStream(jasperPrint, outputStream);
        } catch (Exception e) {
            e.printStackTrace();
            outputStream.write("Exception Reading Report".getBytes());
        } finally {
            outputStream.flush();
            outputStream.close();
        }
    }
}
