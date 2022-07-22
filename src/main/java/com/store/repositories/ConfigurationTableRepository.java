package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.ConfigurationTable;

public interface ConfigurationTableRepository extends JpaRepository<ConfigurationTable, Long> {

	List<ConfigurationTable> findByTableName(String tableName);

}
