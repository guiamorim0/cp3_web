
const produtos = [
    {
        nome: "VoltRide X1",
        descricao: "Moto elétrica urbana compacta, ideal para o dia a dia na cidade. Autonomia de 120km por carga.",
        preco: 12500,
        img: "./src/assets/img/moto1.jpg"
    },
    {
        nome: "VoltRide Sport S3",
        descricao: "Performance esportiva com motor de 8kW. Zero a 80km/h em 4 segundos. Para quem não abre mão de velocidade.",
        preco: 21900,
        img: "./src/assets/img/moto2.jpg" 
    },
    {
        nome: "VoltRide Cargo Pro",
        descricao: "Moto elétrica de carga com baú integrado de 45 litros. A escolha dos entregadores profissionais.",
        preco: 16800,
        img: "./src/assets/img/moto3.jpg" 
    },
    {
        nome: "VoltRide Trail T2",
        descricao: "Versão off-road com suspensão reforçada e pneus All-Terrain. Autonomia de 90km em terrenos difíceis.",
        preco: 27400,
        img: "./src/assets/img/moto4.jpg" 
    },
    {
        nome: "VoltRide Max Elite",
        descricao: "O topo da linha VoltRide. Motor de 15kW, painel digital com GPS integrado e autonomia de 200km.",
        preco: 38900,
        img: "./src/assets/img/moto5.jpg" 
    }
];


function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2);
}


const containerProdutos = document.getElementById("lista-produtos");

if (containerProdutos) {

    let htmlProdutos = "";

    for (let i = 0; i < produtos.length; i++) {
        let moto = produtos[i];

        htmlProdutos += `
            <div class="card-produto">
                <img src="${moto.img}" alt="${moto.nome}">
                <div class="card-info">
                    <h3>${moto.nome}</h3>
                    <p>${moto.descricao}</p>
                    <span class="preco">${formatarPreco(moto.preco)}</span>
                </div>
            </div>
        `;
    }

    
    containerProdutos.innerHTML = htmlProdutos;
}


const carrinho = [
    { nome: "VoltRide X1",        quantidade: 1, preco: 12500 },
    { nome: "VoltRide Sport S3",  quantidade: 2, preco: 21900 },
    { nome: "VoltRide Cargo Pro", quantidade: 1, preco: 16800 }
];


const containerCarrinho = document.getElementById("lista-carrinho");
const elementoTotal     = document.getElementById("total-compra");
const elementoSubtotal  = document.getElementById("subtotal");
const msgDesconto       = document.getElementById("msg-desconto");


let descontoAplicado = false;


function calcularTotal() {
    const total = carrinho.reduce(function(acumulador, item) {
        return acumulador + (item.preco * item.quantidade);
    }, 0);

    return total;
}


function mostrarCarrinho() {

    if (!containerCarrinho) return;

    let htmlItens = "";

    for (let i = 0; i < carrinho.length; i++) {
        let item = carrinho[i];

        htmlItens += `
            <div class="item-carrinho">
                <div class="item-info">
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <span class="item-preco">${formatarPreco(item.preco * item.quantidade)}</span>
            </div>
        `;
    }

    
    containerCarrinho.innerHTML = htmlItens;

    const total = calcularTotal();
    elementoSubtotal.innerText = formatarPreco(total);
    elementoTotal.innerText    = formatarPreco(total);

    descontoAplicado = false;
    msgDesconto.innerText = "";
}


function aplicarDesconto() {

    if (descontoAplicado) {
        msgDesconto.innerText = "Desconto já foi aplicado!";
        return;
    }

    const totalOriginal = calcularTotal();

    const totalComDesconto = totalOriginal * 0.90;
    const valorEconomizado = totalOriginal * 0.10;

    
    elementoTotal.innerText = formatarPreco(totalComDesconto);

    
    msgDesconto.innerText = "Desconto de 10% aplicado! Voce economizou " + formatarPreco(valorEconomizado);

    descontoAplicado = true;
}


function finalizarCompra() {
    alert("Compra finalizada com sucesso! Obrigado por escolher a VoltRide!");
}


mostrarCarrinho();
