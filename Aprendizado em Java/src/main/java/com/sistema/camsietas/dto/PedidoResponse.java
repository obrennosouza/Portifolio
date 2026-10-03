package com.sistema.camisetas.dto;

import com.sistema.camisetas.domain.enums.StatusPedido;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record PedidoResponse(
        Long id,
        String nomeCliente,
        String whatsappCliente,
        StatusPedido status,
        BigDecimal valorTotal,
        BigDecimal valorSinal,
        BigDecimal saldoRestante,
        LocalDate dataEntrega,
        LocalDate dataCriacao,
        List<ItemPedidoDTO> itens
) {}
