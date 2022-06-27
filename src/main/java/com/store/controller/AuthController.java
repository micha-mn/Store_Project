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
	  	 
	     ResponseCookie jwt =  jwtUtils.generateJwtCookie(user.getUserName());
     
         return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwt.toString())
        		 .body(new UserInfoResponseDTO(user.getId(), 
        		 									user.getUserName()));
     }
   
	
    @PostMapping("/signinnew")
	public ResponseEntity<?> authenticateUserJwtNew(@Valid @RequestBody LoginRequestDTO loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));
		 HttpStatus status = HttpStatus.UNAUTHORIZED;
		 LoginResponseDTO response = LoginResponseDTO.builder().valid(false).accessToken("").user(null).build();
		if (authentication.isAuthenticated());
	  	 {
	  	 SecurityContextHolder.getContext().setAuthentication(authentication);
	  	 User user = userService.getUserInfoByUsername(authentication.getName());
	  	 String jwt =  jwtUtils.generateJwtToken(user.getUserName());
	  	  response = LoginResponseDTO.builder().valid(true).accessToken(jwt).user(user).build();
	   	  status = HttpStatus.OK;
	  	 }
	  	 
		return new ResponseEntity<>(response, status);
     }
   
}