alert('Os valores utilizados para conversão são ficticios!');

const txdolarReal = 5.70
const txdolarEuro = 0.95
const txdolarLibra = 0.79
const txdolarBitcoin = 0.000009;

const txeuroDolar = 1.05;
const txeuroLibra = 0.83;
const txeuroReal = 5.99;
const txeuroBitcoin = 0.000011;

const txlibraDolar = 1.27;
const txlibraReal = 7.22;
const txlibraEuro = 1.21;
const txlibraBitcoin = 0.000013;

const txrealDolar = 0.18;
const txrealEuro = 0.17;
const txrealLibra = 0.14;
const txrealBitcoin = 0.000001816727841343268;

let de = document.querySelector('#de');
let para = document.querySelector('#para');
let imgD = document.querySelector('#img-d');
let nomeDe = document.querySelector('#nomeDe');
let imgP = document.querySelector('#img-p');
let nomePara = document.querySelector('#nomePara');
let valorOrigem =  document.querySelector('#valorOrigem');
let valorDestino =  document.querySelector('#valorDestino');

de.addEventListener ('change', function () {
    let par1 = de.value;
    valorOrigem.value='';
    valorDestino.value='';
    if (par1 == "Selecione") {
        nomeDe.textContent = "Selecione"
        imgD.style.display = "none"
    };
    if (par1 == "Real") {
        nomeDe.textContent = "Real Brasileiro";
        imgD.src = 'https://www.bcb.gov.br/novasnotas/assets/img/section/10/10_front.jpg'
        imgD.style.display = "unset"
    };
    if (par1 == "Dolar") {
        nomeDe.textContent = "Dolar Americano"
        imgD.src = 'https://catracalivre.com.br/wp-content/uploads/2015/06/nota-10-dolares-mulher.jpg'
        imgD.style.display = "unset"
    };
    if (par1 == "Libra") {
        nomeDe.textContent = "Libra Exterlina"
        imgD.src = 'https://http2.mlstatic.com/D_NQ_NP_723053-MLB79449075176_102024-O.webp'
        imgD.style.display = "unset"
    };
    if (par1 == "Euro") {
        nomeDe.textContent = "Euro"
        imgD.src = 'https://i.ebayimg.com/images/g/nMMAAOSw0vVhpAR7/s-l1200.jpg'
        imgD.style.display = "unset"
    };
}
);

imgD.style.display = "none"
imgP.style.display = "none"

para.addEventListener('change', function () {
    let par2 = para.value;
    valorOrigem.value='';
    valorDestino.value='';
    if (par2 == "Selecione") {
        nomePara.textContent = "Selecione"
        imgP.style.display = "none"
    };
    if (par2 == "Real") {
        nomePara.textContent = "Real Brasileiro"
        imgP.src = 'https://www.bcb.gov.br/novasnotas/assets/img/section/10/10_front.jpg'
        imgP.style.display = "unset"
    };
    if (par2 == "Dolar") {
        nomePara.textContent = "Dolar Americano"
        imgP.src = 'https://catracalivre.com.br/wp-content/uploads/2015/06/nota-10-dolares-mulher.jpg'
        imgP.style.display = "unset"
    };
    if (par2 == "Libra") {
        nomePara.textContent = "Libra Exterlina"
        imgP.src = 'https://http2.mlstatic.com/D_NQ_NP_723053-MLB79449075176_102024-O.webp'
        imgP.style.display = "unset"
    };
    if (par2 == "Euro") {
        nomePara.textContent = "Euro"
        imgP.src = 'https://i.ebayimg.com/images/g/nMMAAOSw0vVhpAR7/s-l1200.jpg'
        imgP.style.display = "unset"
    };
    if (par2 == "Bitcoin") {
        nomePara.textContent = "Bitcoin"
        imgP.src = 'https://img.freepik.com/fotos-premium/moeda-bitcoin-em-fundo-branco_203337-135.jpg'
        imgP.style.display = "unset"
    }
});

valorOrigem.addEventListener('input', function(){
    let par1 = de.value;
    let par2 = para.value;
    let pares = par1+par2
    if(pares=="RealDolar") { 
        let valorConvertido = valorOrigem.value * txrealDolar;
        valorDestino.value = valorConvertido.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}

    if(pares=="RealEuro") { 
        let valorConvertido = valorOrigem.value * txrealEuro;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "EUR",
    })}

    if(pares=="RealLibra") { 
        let valorConvertido = valorOrigem.value * txrealLibra;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "GBP",
    })}

    if(pares=="RealBitcoin") { 
        let valorConvertido = valorOrigem.value * txrealBitcoin;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "BTC",
    })}

    if(pares=="DolarReal") { 
        let valorConvertido = valorOrigem.value * txdolarReal;
        valorDestino.value = valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}

    if(pares=="DolarEuro") { 
        let valorConvertido = valorOrigem.value * txdolarEuro;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "EUR",
    })}

    if(pares=="DolarLibra") { 
        let valorConvertido = valorOrigem.value * txdolarLibra;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "GBP",
    })}

    if(pares=="DolarBitcoin") { 
        let valorConvertido = valorOrigem.value * txdolarBitcoin;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "BTC",
    })}

    if(pares=="EuroReal") { 
        let valorConvertido = valorOrigem.value * txeuroReal;
        valorDestino.value = valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}

    if(pares=="EuroDolar") { 
        let valorConvertido = valorOrigem.value * txeuroDolar;
        valorDestino.value = valorConvertido.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })}

    if(pares=="EuroLibra") { 
        let valorConvertido = valorOrigem.value * txeuroLibra;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "GBP",
    })}

    if(pares=="EuroBitcoin") { 
        let valorConvertido = valorOrigem.value * txeuroBitcoin;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "BTC",
    })}

    if(pares=="LibraReal") { 
        let valorConvertido = valorOrigem.value * txlibraReal;
        valorDestino.value = valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}

    if(pares=="LibraDolar") { 
        let valorConvertido = valorOrigem.value * txlibraDolar;
        valorDestino.value = valorConvertido.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })}

    if(pares=="LibraEuro") { 
        let valorConvertido = valorOrigem.value * txlibraEuro;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "EUR",
    })}

    if(pares=="EuroBitcoin") { 
        let valorConvertido = valorOrigem.value * txeuroBitcoin;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "BTC",
    })}
    if(pares=="BitcoinReal") { 
        let valorConvertido = valorOrigem.value * txb;
        valorDestino.value = valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}

    if(pares=="LibraDolar") { 
        let valorConvertido = valorOrigem.value * txlibraDolar;
        valorDestino.value = valorConvertido.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })}

    if(pares=="LibraEuro") { 
        let valorConvertido = valorOrigem.value * txlibraEuro;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "EUR",
    })}

    if(pares=="LibraBitcoin") { 
        let valorConvertido = valorOrigem.value * txlibraBitcoin;
        valorDestino.value = valorConvertido.toLocaleString("en-UK", {
        style: "currency",
        currency: "BTC",
    })}


    })