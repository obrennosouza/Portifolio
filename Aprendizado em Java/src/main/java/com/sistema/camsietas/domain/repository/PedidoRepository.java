package com.sistema.camisetas.domain.repository;

import com.sistema.camisetas.domain.entity.Pedido;
import com.sistema.camisetas.domain.enums.StatusPedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    
    // Busca pedidos filtrando por status (ex: FOLLOW_UP, EM_ANDAMENTO)
    List<Pedido> findByStatus(StatusPedido status);

    // Busca histórico de pedidos de um cliente específico
    List<Pedido> findByClienteId(Long clienteId);
}
