function calculoImc(peso, altura) {
    return peso / Math.pow (altura,2)
 }

 function classificacao (imc) {
    if(imc < 18.5 ) {
        console.log('Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso Normal');
    } else if (imc > 25 && imc <= 30) {
        console.log('Acima do Peso');
    } else if ( imc > 30 && imc < 40) {
        console.log('Obeso');
    } else if (imc > 40) {
        console.log('Obesidade Grave');
    }
}


function main() {
    const peso = 60
    const altura = 1.58
    const imc = calculoImc(peso,altura);
    console.log('O IMC dessa pessoa é ' + imc .toFixed(2));
    classificacao (imc)
    }
   
main()
