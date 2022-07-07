package com.store.services;

import java.util.List;

import com.store.domain.Client;
import com.store.dto.ClientDTO;

public interface ClientService {

	String SaveClient(ClientDTO clientDTO);

	List<Client> getAllClient();
}
