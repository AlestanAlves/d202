// let saboresDePizza;

// saboresDePizza = ["mussarela", "frango com catupiry", "strogonoff", "baiana", "4 queijos"];

// let Fagner = ["Mauricio" , 18, true, "Santana", ["pé de moleque", "mousse", "pudim"]];

// let starwars = {
//     luke: "Ator - Mark Hamil",
//     darthVader: "Ator - Hayden Christensen",
//     princesaLeia: "Atriz - Carrie Fisher"
// };

// ESTRUTURA

// if(condicao){
//     codigo executado quando a condição é verdadeira.
// }else{
//     codigo a ser executado se a condição for falsa.
// }

// let user = prompt("coloque seu usuário");
// let pass = prompt("coloque sua senha");
//     if (user == "admin"){
//         if (pass=="admin"){
//             alert("Usuário logado");
//             let saque = Number(prompt("digite o valor do saque:"));
//                 if (saque <= 2000){
//                     alert(`Parabéns você consegiu sacar R$${saque}`);
//                     alert(`Seu saldo atual é R$${1000 - saque}`);
//                 }else{
//                     alert("Saque não disponivel");
//                 }
//         }else{
//             alert("sai hacker!!");
//         }
//     }else {
//         alert("sai hacker!!!!!!!!!!!");
//     }
// }

// // let numero = 0;
// //     while (numero <=10){
// //         console.log(7*numero);
// //         numero++; 
// //         // numero = numero + 1 ou numero += 1

// //     }

let tentativa = 0;
    while(tentativa <=3){
        let senhadigitada = prompt("senha");
        let usuario = prompt("user");
        if (senhadigitada == "admin" && usuario == "admin"){
            alert("você foi logado");
            tentativa = 100;
        }else{
            alert("login está errado");
        }
    }