package com.store.rest.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.store.security.jwt.AuthEntryPointJwt;
import com.store.security.jwt.AuthTokenFilter;
import com.store.services.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;
    
    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
      return new AuthTokenFilter();
    }
    
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	/* http.cors().and().csrf().disable()
    	 .formLogin().disable()
    	 .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
    	 .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    	 .authorizeRequests().antMatchers("/api/auth/**").permitAll()
    	 .antMatchers("/store/login").permitAll()
    	 .antMatchers("/store/**").hasAuthority("ADMIN")
    	 .antMatchers(
                 "/js/**",
                 "/css/**",
                 "/img/**").permitAll()
	     .anyRequest().authenticated();
	     
	      http
         .csrf().disable()
         .authorizeRequests()
         .antMatchers(HttpMethod.GET, "/api/**").permitAll()
         .antMatchers("/api/auth/**").permitAll()
         .anyRequest()
         .authenticated()
         .and()
         .httpBasic();
    	 */
    	 http.cors().and().csrf().disable()
    	 .formLogin().disable()
    	 .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
    	 .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    	 .authorizeRequests().antMatchers("/api/auth/**").permitAll()
    	 .antMatchers("/store/login").permitAll()
    	 .antMatchers("/store/**").hasAuthority("ADMIN")
    	 .antMatchers(
                 "/js/**",
                 "/css/**",
                 "/img/**").permitAll()
	     .anyRequest().authenticated();
    	 http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    	

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}