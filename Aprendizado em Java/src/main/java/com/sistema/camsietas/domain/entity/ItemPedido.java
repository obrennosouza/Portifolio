package com.sistema.camisetas.domain.entity;

import com.sistema.camisetas.domain.enums.Tamanho;
import com.sistema.camisetas.domain.enums.TipoMalha;
import com.sistema.camisetas.domain.enums.TipoPersonalizacao;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_item_pedido")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String cor;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private Tamanho tamanho;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private TipoMalha tipoMalha;

    @ElementCollection(targetClass = TipoPersonalizacao.class)
    @CollectionTable(name = "tb_item_personalizacao", joinColumns = @JoinColumn(name = "item_pedido_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_personalizacao")
    private Set<TipoPersonalizacao> personalizacoes = new HashSet<>();

    @Column(name = "url_arte_anexo", length = 500)
    private String urlArteAnexo;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(name = "preco_unitario", nullable = false, precision = 10, scale = 2)
    private BigDecimal precoUnitario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pedido_id", nullable = false)
    private Pedido pedido;
}
