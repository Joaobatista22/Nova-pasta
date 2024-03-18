const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImage0 = document.getElementById("0-imagem-miniatura");
const miniaturaImage1 = document.getElementById("1-imagem-miniatura");
const miniaturaImage2 = document.getElementById("2-imagem-miniatura");

const verdeCiprest = {
  nome: "Verde-Ciprest",
  pasta: "imagens-verde-cipreste",
};
const azulInverno = {
  nome: "Azul-Inverno",
  pasta: "imagens-azul-inverno",
};
const meiaNoite = {
  nome: "Meia-Noite",
  pasta: "imagens-meia-noite",
};
const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa-Claro",
  pasta: "imagens-rosa-claro",
};
const opcoesCores = [verdeCiprest, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["45 mm", "41 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImg(params) {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" +
    idOpcaoSelecionada +
    ".jpeg";
}

function trocarTamanho(params) {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  tituloProduto.innerText =
    "Pulseira loop esportiva" +
    opcoesCores[corSelecionada].nome +
    "para caixa de " +
    opcoesTamanho[tamanhoSelecionado];

  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}
function trocarCor(params) {
  const IdOpcaoCor = document.querySelector('[name="opcao-cor"]:checked').id;
  corSelecionada = IdOpcaoCor.charAt(0);
  tituloProduto.innerText =
    "Pulseira loop esportiva" +
    opcoesCores[corSelecionada].nome +
    "para caixa de " +
    opcoesTamanho[tamanhoSelecionado];
  nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
  miniaturaImage0.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-0.jpeg";
  miniaturaImage1.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-1.jpeg";
  miniaturaImage2.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-2.jpeg";
}
