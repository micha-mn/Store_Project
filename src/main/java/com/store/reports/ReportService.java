package com.store.reports;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.store.domain.Item;

import java.io.File;
import java.io.FileNotFoundException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class ReportService{
	
    private JasperPrint getJasperPrint(Item item, String resourceLocation) throws FileNotFoundException, JRException {
        File file = ResourceUtils.getFile(resourceLocation);
        JasperReport jasperReport = JasperCompileManager
                .compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource((Collection<?>) item);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy","David");

        JasperPrint jasperPrint = JasperFillManager
                .fillReport(jasperReport,parameters,dataSource);

        return jasperPrint;
    }

    public String generateReport(LocalDate localDate, String fileFormat){

        return null;

    }

  

}