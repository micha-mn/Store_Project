package com.store.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.User;
import com.store.repositories.UserRepository;

@Service
public class UserService {
	
@Autowired
UserRepository userRepository;

public User getUserInfoByUsername(String userName)
{      
    return userRepository.findUserByUserName(userName);
}

}
