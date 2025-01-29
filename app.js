let listaAmigosSecretos = [];

function adicionarAmigo() {

    let digito = document.getElementById('amigo');
    let nomeDoAmigoDigitado = digito.value.trim();


    if (listaAmigosSecretos.includes(nomeDoAmigoDigitado)) {
        alert('O amigo digitado já está na lista.');
        return;

    } else {
        listaAmigosSecretos.push(nomeDoAmigoDigitado);

        digito.value = ''

    }
    limparCampo();
    mostrarListaNaTela()
}

function mostrarListaNaTela() {
    let listaNaTela = document.getElementById('listaAmigos');
    
    listaNaTela.innerHTML = '';

    let numeroDeAmigosNaLista = 0;
   
    while (numeroDeAmigosNaLista < listaAmigosSecretos.length) {
        let lista = document.createElement("li");
        lista.textContent = listaAmigosSecretos[numeroDeAmigosNaLista];
        listaNaTela.appendChild(lista); 

        numeroDeAmigosNaLista++;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function sortearAmigo() {
    if (listaAmigosSecretos.length == 0 ) {
        alert('Por favor insira amigos antes de sortear.')
        return;
    }

    let sorteador = Math.floor(Math.random() * listaAmigosSecretos.length);

    let nomePessoaSorteada = listaAmigosSecretos[sorteador];

    let resultadoDoAmigoSecreto = document.getElementById("resultado");
    resultadoDoAmigoSecreto.innerHTML = "Seu amigo secreto é " + nomePessoaSorteada;

}