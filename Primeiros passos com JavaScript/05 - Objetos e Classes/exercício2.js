/* 2) Crie uma classe para representar pessoas.
   Para cada pessoa teremos os atributos nome, peso e altura.
   As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/ (altura*altura));
   Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José
   para dizer o valor de seu IMC.
   */

   class Pessoa {
    nome;
    peso;
    altura;
    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc () {
    return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
    const imc = this.calcularImc
        if(imc < 18.5 ) {
        return ('Abaixo do Peso');
    } else if ( 18.5 > imc < 25 ) {
        return ('Peso Normal');
    } else if (25 > imc < 30) {
        return ('Acima do Peso');
    } else if ( 30 > imc < 40) {
        return ('Obeso');
    } else if (imc > 40) {
        return ('Obesidade Grave');
    }

    }
   }

   const jose = new Pessoa ('José',70,1.75)
   console.log(jose);
   console.log(jose.calcularImc().toFixed(2));
   console.log(jose.classificarImc());

   const cristianna = new Pessoa ('Cristianna',62,1.58)
   console.log(cristianna);
   console.log(cristianna.calcularImc().toFixed(2));
   console.log(cristianna.classificarImc());