package com.sistema.camisetas.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record CriarPedidoRequest(
        Long clienteId,
        List<ItemPedidoDTO> itens,
        BigDecimal valorSinal,
        LocalDate dataEntrega
) {}
