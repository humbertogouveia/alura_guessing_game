alert('Bem vindo ao jogo da advinhação!')
let chute = Number(prompt('Insira um número de 1 a 100'))
let numeroSecreto = 3
let quantidadeDeTentativas = 1

while(isNaN(chute)) {
    alert('Por favor, digite um número')
    chute = Number(prompt('Insira um número de 1 a 100'))
}

while(chute !== numeroSecreto) {
    chute > numeroSecreto
        ? alert(`O número secreto é menor que ${chute}`)
        : alert(`O número secreto é maior que ${chute} `)
        
    chute = Number(prompt('Insira um número de 1 a 100'))
}
let tentativaNoPluralOuSingular = quantidadeDeTentativas > 1 ? 'tentativas':'tentativa'

alert(`Parabéns! você acertou o número secreto ${numeroSecreto} com ${quantidadeDeTentativas} ${tentativaNoPluralOuSingular}`)