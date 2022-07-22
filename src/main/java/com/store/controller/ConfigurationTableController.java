package com.store.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.collections4.MapUtils;
import org.apache.el.lang.FunctionMapperImpl.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.domain.ConfigurationTable;
import com.store.services.ConfigurationTableService;

@RestController
@RequestMapping(value="config")
public class ConfigurationTableController {
	
	@Autowired
	ConfigurationTableService configurationTableService;
	
	@GetMapping(value = "table/{tableName}")
	public ResponseEntity<?> getBrandIdByName(@PathVariable("tableName") String tableName){
		List<ConfigurationTable> configurationTable = configurationTableService.getConfigurationTableByTableName(tableName);
	
	  return new ResponseEntity<>(convertListToHashMap(configurationTable), HttpStatus.OK);
	}
	 public Map<String, Object> convertListToHashMap(List<ConfigurationTable> list) {
		 Map<String, Object> map = list.stream()
			      .collect(Collectors.toMap(ConfigurationTable::getColumnName,ConfigurationTable::isHidden));
		    return map;
		}
}
