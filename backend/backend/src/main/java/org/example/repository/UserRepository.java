package org.example.repository;

import org.example.model.Event;
import org.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username); // <- Вот этот метод

    // Дополнительные методы (например, для поиска пользователя)
    Optional<User> findByUsername(String username);
}