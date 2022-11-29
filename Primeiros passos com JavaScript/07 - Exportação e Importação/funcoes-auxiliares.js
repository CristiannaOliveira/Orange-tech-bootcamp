
function gets() {
    return 10;
}

function print(texto){
    console.log(texto);
}

// Exportação ,função: módulo
module.exports = {
    gets : gets,
    print: print
};