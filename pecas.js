var listadepecas = ["filtro de ar","motor","amortecedor"]

if (listadepecas.length < 10) {
    // É possivel cadastrar
     console.log("É possivel cadastras mais peças")
    } else {
        console.log("não tem mais espaço na lista")
    }


let peso = 50;
if (peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else {
    console.log("A peça possui peso adequado")
}


let nomePeca ="Disco de freio"
if (nomePeca.length>3){ 
    console.log("nome de peça esta adequado para o cadastro!")
}else if(nomePeca.length==0){
    console.log("o nome da peça não pode ser vazio")
}else{
    console.log("o nome deve ter mais de 3 caracteres,digite um nome adequado") 
 } 

    //  = -> atribuição de valor
   //  == -> verificação se os valores são iguais -> é igual?
  //  === -> verificação se o valor e o tipo de valor são iguais

  // let idade = 23
 // if (idade == "23")


 switch(nomePeca.length){
    case  0:
    console.log("o nome da peca não pode ser vazio") 
    break;

    case 1:
    case 2:
    case 3:  
    console.log("o nome deve ter mais de 3 caracteres,digite um nome adequado")  

    default
    console.log("nome da peca esta adequado")
    break;
}