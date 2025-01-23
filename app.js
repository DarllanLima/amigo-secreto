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
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

