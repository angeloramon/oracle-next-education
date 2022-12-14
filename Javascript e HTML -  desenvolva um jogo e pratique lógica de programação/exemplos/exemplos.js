function semParamSemReturn() {
  console.log('semParamSemReturn');
}

function comParamSemReturn(palavra) {
  console.log("Sua palavra foi: " + palavra);
}

function semParamComReturn() {
  //return 'retornei';
  return true;
}

function comParamComReturn(param1, param2) {
  return "Seus parâmetros foram: " + param1 + " e " + param2;
}

var frase = "Uma frase qualquer."
var idade = 20

// semParamSemReturn();
// comParamSemReturn("valor primitivo");
// comParamSemReturn(frase);

// var retorno = semParamComReturn();
// console.log(retorno);
// console.log(semParamComReturn());

// var retornou = comParamComReturn(frase, idade)
// console.log(retornou);
// console.log(comParamComReturn(frase, idade));