package com.store.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.ConfigurationTable;
import com.store.repositories.ConfigurationTableRepository;
@Service
public class ConfigurationTableService {
	@Autowired 
	ConfigurationTableRepository configurationTableRepository;
	
public List<ConfigurationTable> getConfigurationTableByTableName(String tableName) {
		
		return configurationTableRepository.findByTableName(tableName);
	}

}
