
function escreverNome (nome) {
    return ('O meu nome é ' + nome);
}

function verificarIdade (idade) {
    if (idade >= 18) {
    console.log(escreverNome('Cristianna') + ' e sou maior de idade.');
}
    else {
    console.log(escrever('Cristianna') + ' e sou menor de idade.');
    }
}

verificarIdade (21);