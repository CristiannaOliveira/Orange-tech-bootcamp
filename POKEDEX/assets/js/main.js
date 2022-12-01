
const offset = 0;        
const limit = 10;       
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`       

/*o Then é para o sucesso e caso dê erro é o Catch.Se eu quiser algo apesar do sucesso ou do fracasso
é o Finally. */ 

fetch(url)
.then(function (response){
console.log(response);
})

.catch(function(error){
console.error(error);
})

.finally(function(){
console.log('Requisição concluída!');
})
