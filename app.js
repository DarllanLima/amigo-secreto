let listaAmigosSorteados = [];

function adicionarAmigo() {
    let nomeDoAmigoDigitado = document.querySelector('input').value;
    console.log(nomeDoAmigoDigitado);

    if (listaAmigosSorteados.includes(nomeDoAmigoDigitado)) {
        alert('O amigo digitado já está na lista.');
        limparCampo();

    } else {
        listaAmigosSorteados.push(nomeDoAmigoDigitado);
        console.log(listaAmigosSorteados);
        limparCampo();
        mostrarListaNaTela()
    }

}

function mostrarListaNaTela() {
    let listaNaTela = document.querySelector('ul');
    let numeroDeAmigosNaLista = listaAmigosSorteados.length;
    if (numeroDeAmigosNaLista > 1) {
       
    } else {
        let textoDaListaNaTela = listaAmigosSorteados;
        listaNaTela.innerHTML = textoDaListaNaTela;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

