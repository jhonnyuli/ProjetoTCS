package com.tcs.api.repositories;

import com.tcs.api.entities.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;

@SpringBootApplication
public interface UserRepository extends JpaRepository<User, Long> {
}
