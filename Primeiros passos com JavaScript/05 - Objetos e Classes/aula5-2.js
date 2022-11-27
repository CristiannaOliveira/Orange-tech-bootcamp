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

/* Classe com constructor (atribuidor da classe)
*/

class Profile {
    nome;
    idade;
    anoDeNascimento;
    constructor (nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever (){
        console.log( 'Meu nome é ' + this.nome + ' e minha idade é ' + this.idade + ' nasci em ' + this.anoDeNascimento);
    }
}
    

const alberto = new Profile ('Alberto da Silva', 22);
const catarina = new Profile ('Catarina de Souza', 45);

alberto.descrever();
catarina.descrever();

/* Comparação e para usar o ${} tem que usar o acento grave */

class People {
    nome;
    idade;
    constructor (nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function comparePeople(p1, p2) {
    if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
    console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
    
}

const andreia = new People ('Andréia' , 22);
const angelica = new People ('Angélica',18);

comparePeople(andreia,angelica);