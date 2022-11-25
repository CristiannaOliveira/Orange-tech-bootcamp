
const pessoa = {
    nome: 'Vitor 3 Guerra',
    idade:25,

    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade );
    }
}

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();

