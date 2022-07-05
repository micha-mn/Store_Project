package com.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.domain.User;
import com.store.dto.LoginRequestDTO;
import com.store.dto.LoginResponseDTO;
import com.store.dto.UserInfoResponseDTO;
import com.store.repositories.UserRepository;
import com.store.security.jwt.JwtUtils;
import com.store.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
	private final UserService userService;
    
    @Autowired
    private JwtUtils jwtUtils;
    
    

	public AuthController(UserService userService)
	{
		this.userService   = userService;
	}
	
    @PostMapping("/signin")
	public ResponseEntity<?> authenticateUserJwt(@Valid @RequestBody LoginRequestDTO loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));
		
	  	 SecurityContextHolder.getContext().setAuthentication(authentication);
	  	 User user = userService.getUserInfoByUsername(authentication.getName());
	  	 
	     String jwt =  jwtUtils.generateJwtToken(user.getUserName());
	   
         return ResponseEntity.ok()
        		 .body(new UserInfoResponseDTO(user.getId(), 
        				 					   user.getUserName(),
        				 					   user.getFirstName(),
        				 					   user.getLastName(),
        		 							   jwt));
     }
   
}