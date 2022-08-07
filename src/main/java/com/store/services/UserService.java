package com.store.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.store.domain.User;
import com.store.dto.UserDTO;
import com.store.repositories.UserRepository;

import jakarta.validation.Valid;

@Service
public class UserService {
	
@Autowired
UserRepository userRepository;

@Autowired
private PasswordEncoder passwordEncoder;

public User getUserInfoByUsername(String userName)
{      
    return userRepository.findUserByUserName(userName);
}

public User saveChangedPassword(@Valid UserDTO userDTO) {
	User user = getUserInfoByUsername(userDTO.getUserName());
	user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
	user.setIsFirstLogin(false);
	return userRepository.save(user);
}

}
