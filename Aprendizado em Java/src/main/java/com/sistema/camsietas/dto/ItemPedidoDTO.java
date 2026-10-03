package com.sistema.camisetas.dto;

import com.sistema.camisetas.domain.enums.Tamanho;
import com.sistema.camisetas.domain.enums.TipoMalha;
import com.sistema.camisetas.domain.enums.TipoPersonalizacao;

import java.math.BigDecimal;
import java.util.Set;

public record ItemPedidoDTO(
        String cor,
        Tamanho tamanho,
        TipoMalha tipoMalha,
        Set<TipoPersonalizacao> personalizacoes,
        String urlArteAnexo,
        Integer quantidade,
        BigDecimal precoUnitario
) {}
