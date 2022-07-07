package com.store.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Client;
import com.store.dto.ClientDTO;
import com.store.enums.ClientStatus;
import com.store.repositories.ClientRepository;
import com.store.services.ClientService;
@Service
public class ClientServiceImpl implements ClientService{
 
	@Autowired
	ClientRepository clientRepository;
	
	public boolean checkifClientexists(ClientDTO clientDTO) {
	Optional<Client> isClient = clientRepository.findByName1AndName2(clientDTO.getName1(),
			clientDTO.getName2());
		if (isClient.isPresent())
			return true;
		else
			return false;
	}
	public String SaveClient(ClientDTO clientDTO) {
		   String clientStatus="";
		   boolean exists = checkifClientexists(clientDTO);
		   if (!exists) 
				{
				Client client = Client.builder()
										.name1(clientDTO.getName1())
										.name2(clientDTO.getName2())
										.phone(clientDTO.getPhone())
										.address(clientDTO.getAddress())
										.instagram(clientDTO.getInstagram()).build();
			
				clientRepository.save(client);
				clientStatus = ClientStatus.SAVED.value;
				}
			else
				clientStatus = ClientStatus.EXIST.value;
			
			return clientStatus;
	}

}
