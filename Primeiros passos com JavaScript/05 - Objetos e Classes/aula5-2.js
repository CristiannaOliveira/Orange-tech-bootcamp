/* Assim como o pronome 'ele' é usado para se referir ao antecedente
(substantivo a que um pronome se refere), a palavra-chave this é
similarmente usada para se referir a um objeto que a função (onde this 
é usado) está vinculada. Esta palavra-chave não se refere apenas ao
objeto,mas também contém o valor do objeto. Assim como o pronome,
isso pode ser pensado omo um atalho (ou um substituto razoavelmente
não-ambíguo) para se referir ao objeto no contexto (o 'objeto antecedente')
Retirado de: 'DPW' - link no readme
*/
const pessoa = {
    nome: 'Vitor J Guerra',
    idade:25,

    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade );
    }
}

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();
 /* Aqui o 'nome' não é uma string, ele procura o valor dado ao nome
 na variável pessoa.
 Não esquecer o (;) que é o separador de comandos.
*/

console.log(pessoa['nome']);

/* Ensino de Classe
obs: não se coloca function
*/
class Pessoa {
    nome;
    idade;
    descrever (){
        console.log( 'Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

const vitor = new Pessoa ();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa ();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();

