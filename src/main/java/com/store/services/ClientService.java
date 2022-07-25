package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Client;
import com.store.dto.ClientDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.ClientRepository;
@Service
public class ClientService{
 
	@Autowired
	ClientRepository clientRepository;
	
	public boolean checkifClientexists(ClientDTO clientDTO) {
	Optional<Client> isClient = clientRepository.findByName1IgnoreCaseAndName2IgnoreCase(clientDTO.getName1(),
			clientDTO.getName2());
		if (isClient.isPresent())
			return true;
		else
			return false;
	}
	public String saveClient(ClientDTO clientDTO) {
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
				clientStatus = StatusEnum.CLIENT_SAVED.value;
				}
			else
				clientStatus = StatusEnum.CLIENT_EXIST.value;
			
			return clientStatus;
	}
	public List<Client> getAllClient()
	{
		return clientRepository.findAllByOrderByIdDesc();	
	}
	public String updateClientById(ClientDTO clientDTO)
	{
		    Client updateClient = Client.builder()
					    .id(clientDTO.getId())
						.name1(clientDTO.getName1())
						.name2(clientDTO.getName2())
						.phone(clientDTO.getPhone())
						.address(clientDTO.getAddress())
						.instagram(clientDTO.getInstagram()).build();
		    clientRepository.save(updateClient);
		 	return StatusEnum.CLIENT_UPDATED.value;
	}
	public String deleteClientById(long id)
	{
		clientRepository.deleteById(id);
		return StatusEnum.CLIENT_DELETED.value;
	}
	
}
