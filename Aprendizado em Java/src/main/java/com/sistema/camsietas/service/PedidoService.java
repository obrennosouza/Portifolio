package com.sistema.camisetas.service;

import com.sistema.camisetas.domain.entity.Cliente;
import com.sistema.camisetas.domain.entity.ItemPedido;
import com.sistema.camisetas.domain.entity.Pedido;
import com.sistema.camisetas.domain.enums.StatusPedido;
import com.sistema.camisetas.domain.repository.ClienteRepository;
import com.sistema.camisetas.domain.repository.PedidoRepository;
import com.sistema.camisetas.dto.CriarPedidoRequest;
import com.sistema.camisetas.dto.ItemPedidoDTO;
import com.sistema.camisetas.dto.PedidoResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final ClienteRepository clienteRepository;

    public PedidoService(PedidoRepository pedidoRepository, ClienteRepository clienteRepository) {
        this.pedidoRepository = pedidoRepository;
        this.clienteRepository = clienteRepository;
    }

    @Transactional
    public PedidoResponse criarPedido(CriarPedidoRequest request) {
        Cliente cliente = clienteRepository.findById(request.clienteId())
                .orElseThrow(() -> new IllegalArgumentException("Cliente não encontrado"));

        Pedido pedido = new Pedido();
        pedido.setCliente(cliente);
        pedido.setStatus(StatusPedido.FOLLOW_UP);
        pedido.setValorSinal(request.valorSinal());
        pedido.setDataEntrega(request.dataEntrega());

        List<ItemPedido> itens = request.itens().stream().map(dto -> {
            ItemPedido item = new ItemPedido();
            item.setCor(dto.cor());
            item.setTamanho(dto.tamanho());
            item.setTipoMalha(dto.tipoMalha());
            item.setPersonalizacoes(dto.personalizacoes());
            item.setUrlArteAnexo(dto.urlArteAnexo());
            item.setQuantidade(dto.quantidade());
            item.setPrecoUnitario(dto.precoUnitario());
            item.setPedido(pedido);
            return item;
        }).toList();

        pedido.setItens(itens);
        Pedido pedidoSalvo = pedidoRepository.save(pedido);

        return mapToResponse(pedidoSalvo);
    }

    @Transactional(readOnly = true)
    public List<PedidoResponse> listarTodos() {
        return pedidoRepository.findAll().stream()
                .map(this::mapToResponse)
                .toList();
    }

    private PedidoResponse mapToResponse(Pedido pedido) {
        List<ItemPedidoDTO> itensDto = pedido.getItens().stream().map(item -> new ItemPedidoDTO(
                item.getCor(),
                item.getTamanho(),
                item.getTipoMalha(),
                item.getPersonalizacoes(),
                item.getUrlArteAnexo(),
                item.getQuantidade(),
                item.getPrecoUnitario()
        )).toList();

        return new PedidoResponse(
                pedido.getId(),
                pedido.getCliente().getNome(),
                pedido.getCliente().getWhatsapp(),
                pedido.getStatus(),
                pedido.getValorTotal(),
                pedido.getValorSinal(),
                pedido.getSaldoRestante(),
                pedido.getDataEntrega(),
                pedido.getDataCriacao(),
                itensDto
        );
    }
}
