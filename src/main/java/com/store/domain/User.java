package com.store.domain;

import java.sql.Timestamp;
import java.util.Set;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "Users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String userName;
    private String password;
	private String firstName;
    private String lastName;
    private Boolean isFirstLogin;
    private Timestamp createdOn;
    private Timestamp updatedOn;
    private Timestamp lastLogin;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Set<Role> roles;
}
