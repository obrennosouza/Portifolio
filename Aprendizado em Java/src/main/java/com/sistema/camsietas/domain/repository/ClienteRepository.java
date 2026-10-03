package com.sistema.camisetas.domain.repository;

import com.sistema.camisetas.domain.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    
    // Busca um cliente pelo número de WhatsApp
    Optional<Cliente> findByWhatsapp(String whatsapp);
}
