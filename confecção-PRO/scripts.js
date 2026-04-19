function carregarDados() {
    const dadosSalvos = localStorage.getItem('meusPedidos');
    
    if (dadosSalvos) {
        const pedidos = JSON.parse(dadosSalvos);
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = ''; // Limpa a tabela antes de carregar

        pedidos.forEach(pedido => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td><img src="${pedido.imagem}" class="miniatura"></td>
                <td>${pedido.cliente}</td>
                <td>${pedido.modelo}</td>
                <td>${pedido.quantidade}</td>
                <td><span class="badge status-corte">${pedido.status}</span></td>
                <td>
                    <button class="btn-tabela">👁️</button>
                    <button class="btn-tabela">💰</button>
                    <button class="btn-tabela" onclick="excluirPedido(this)">🗑️</button>
                </td>
            `;
            corpoTabela.appendChild(novaLinha);
        });
    }
}

// Executa assim que a página termina de carregar
window.onload = carregarDados;

function salvarNoLocalStorage() {
    const linhas = document.querySelectorAll('tbody tr');
    const pedidos = [];

    linhas.forEach(linha => {
        // Captura os dados de cada célula da linha
        const colunas = linha.querySelectorAll('td');
        if (colunas.length > 0) {
            const pedido = {
                imagem: colunas[0].querySelector('img').src,
                cliente: colunas[1].innerText,
                modelo: colunas[2].innerText,
                quantidade: colunas[3].innerText,
                status: colunas[4].innerText
            };
            pedidos.push(pedido);
        }
    });

    // Converte o array de objetos para uma string e salva
    localStorage.setItem('meusPedidos', JSON.stringify(pedidos));
}

const botaoInicio = document.getElementById('botao-inicio');
const botaoPedidos = document.getElementById('botao-pedidos');
const botaoAddPedido = document.getElementById('botao-addPedido');
const botaoAddTabela = document.getElementById('botao-addTabela');
const botaoFinanceiro = document.getElementById('botao-financeiro');
const botaoBackup = document.getElementById('botao-backup');
const botaoExcluir = document.getElementById('botao-excluir');
const invisivel = document.querySelectorAll('.invisivel');
const visivel = document.querySelectorAll('.visivel');
const todasAsSecoes = document.querySelectorAll('#inicio, #pedidos, #formulario-pedido,#financeiro');

function trocarVisibilidade(idDaDivParaMostrar) {
    // 1. Seleciona todas as divs principais (as que podem ser visíveis ou invisíveis)
    // Usamos um seletor que pega todas as divs que tenham ID e as classes de controle
    const todasAsSecoes = document.querySelectorAll('#inicio, #pedidos, #formulario-pedido, #financeiro');

    // 2. Loop para esconder todas
    todasAsSecoes.forEach(secao => {
        secao.classList.remove('visivel');
        secao.classList.add('invisivel');
    });

    // 3. Mostra apenas a que você clicou usando o ID recebido por parâmetro
    const divAlvo = document.getElementById(idDaDivParaMostrar);
    if (divAlvo) {
        divAlvo.classList.remove('invisivel');
        divAlvo.classList.add('visivel');
    }
}

// 1. Selecionamos o corpo da tabela onde as linhas serão inseridas
const corpoTabela = document.querySelector('tbody');

function adicionarPedidoATabela() {
    // 2. Capturamos os valores dos campos do formulário
    const cliente = document.getElementById('nomeCliente').value;
    const modelo = document.getElementById('modelo').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('PrecoUnit').value;

    // Validação simples: não adicionar se o nome do cliente estiver vazio
    if (cliente === "") {
        alert("Por favor, preencha o nome do cliente.");
        return;
    }

    // 3. Criamos o elemento da nova linha
    const novaLinha = document.createElement('tr');

    // 4. Montamos o conteúdo interno da linha (HTML)
    novaLinha.innerHTML = `
        <td>${cliente}</td>
        <td>${modelo}</td>
        <td>${quantidade}</td>
        <td><span class="badge status-corte">Novo</span></td>
        <td>
            <button class="btn-tabela">​📋​ Ficha técnica</button>
            <button class="btn-tabela">💰 Custos</button>
            <button class="btn-tabela" onclick="deletarLinha(this)">❌ Excluir</button>
        </td>
    `;

    // 5. Adicionamos a linha à tabela
    corpoTabela.appendChild(novaLinha);

    // 6. Limpamos o formulário para o próximo uso
    document.getElementById('formAddPedido').reset();

    // 7. Voltamos para a tela de pedidos (reaproveitando sua função anterior)
    trocarVisibilidade('pedidos');
    salvarNoLocalStorage();
}

function deletarLinha(botao) {
    // O método closest('tr') sobe na hierarquia do HTML até encontrar a linha
    const linha = botao.closest('tr');
    
    // O método remove() exclui o elemento do documento
    linha.remove();
    salvarNoLocalStorage();
}