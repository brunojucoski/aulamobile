const divConteudo = document.querySelector("#conteudo");

divConteudo.innerHTML = "manipulado via JS";

const ulListaDestino =document.createElement("ul");
const liNewYork = document.createElement("li");


liNewYork.textContent = "Nova Iorque";

ulListaDestino.appendChild(liNewYork);
divConteudo.appendChild(ulListaDestino);

// let idade;

// do {
//    idade = prompt ("informe sua idade")

//    if(idade <18){
// alert("Você não pode ter CNH");
//    }else{
//     alert("Você pode ter CNH")
//    }

// } while(idade < 18)
function entrar() {

    const nome = document.getElementById("nome").value;
    
    if (nome && nome !== '') {
        divConteudo.innerHTML = "Bem vindo, " + nome; 
       // document.getElementById("mensagem").innerText = `Bem-vindo, ${nome}!`;
    } else {  
        divConteudo.innerHTML = "informe o seu nome" ; 
        //document.getElementById("mensagem").innerText = "Por favor, insira um nome.";
    }
}

function contador() {

const numero = document.getElementById("numero").value;
const ulfor =document.createElement("ul");

for(let i=0; i <= numero ;i ++) {
     const lifor = document.createElement("li");
     lifor.textContent = "numero: " + i ;
     ulfor.appendChild(lifor);
}

divConteudo.append(ulfor); 

}
