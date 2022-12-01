
const offset = 0;        
const limit = 10;       
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`       

/*o Then é para o sucesso e caso dê erro é o Catch.Se eu quiser algo apesar do sucesso ou do fracasso
é o Finally. */ 
// o => serve para reduzir a sintaxe de função, com uma linha eu posso apagar o return.
fetch(url)
.then((response) => response.json())

.then((jsonBody) => console.log(jsonBody))

.catch((error) => console.error(error))

.finally((frase) =>console.log('Requisição concluída!'))
