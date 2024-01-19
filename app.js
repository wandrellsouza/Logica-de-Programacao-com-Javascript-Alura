alert('Boas Vindas ao Jogo do Número Secreto!');

let numeroMaximo = parseInt(prompt('Qual valor maximo você gostaria?'));
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let valorDigitado;
let tentativas = 1;

//enquanto valorDigitado for diferente do número secreto tente novamente
while (valorDigitado != numeroSecreto) {
    valorDigitado = prompt(`Escolha um Número entre 1 e ${numeroMaximo}`);

    //se o valorDigitado for igual ao numeroSecreto,exibe um alert com a mensagem de Parabens
    if (valorDigitado == numeroSecreto) {
        break
       
    } else {
        //caso o número secreto for maior ou menor será exibido uma das dicas abaixo
        if (valorDigitado > numeroSecreto) {
            alert(`Chegou Perto,mas lá vai uma dica: É um número menor que ${valorDigitado}`);
        } else {
            alert(`Chegou Perto,mas lá vai uma dica: É um número maior que ${valorDigitado}`);
        }
        tentativas++;
    }
}

//abaixo vemos um operador ternário que basicamente é um if/else escrito de uma forma mais legivel
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você descobriu o Número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Parabéns! Você descobriu o Número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert(`Parabéns! Você descobriu o Número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
