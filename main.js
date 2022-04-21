let number = {
  first: Number(prompt('Digite primeiro número:')), 
  second: Number(prompt('Digite o segundo número'))
}

let operationComplete = [
  [ 
  'A soma dos dois números é: ',
  'A subtração dos dois números é: ',
  'A multiplicação dos dois números é: ',
  'A divisão dos dois números é: ',
  'O resto dos dois números é: '
],
{

  0: (n1, n2) => n1 + n2, // sum
  1: (n1, n2) => n1 - n2, // sub
  2: (n1, n2) => n1 * n2, // multi
  3: (n1, n2) => (n1 / n2).toFixed(1), // div
  4: (n1, n2) => n1 % n2, // rest
  

}
]

for(let i = 0; i < 5; i++) { 

  alert(`${operationComplete[0][i]} ${operationComplete[1][i](number.first, number.second)}`)

}

if((number.first + number.second) % 2 == 0) { 
  alert('O resultado da soma é par')
} else { 
  alert('Os números inseridos são indiferentes ')
}

if(number.first == number.second) { 
  alert('Os números colocados são iguais') 
} else { 
  alert('Os números inseridos são diferentes')
}

