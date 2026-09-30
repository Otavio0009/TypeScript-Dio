const soma = (a:number, b:number) => {
    return a + b;
}

console.log( soma(3, 6));
console.log(soma('Otávio', 'Neto'));

/** 
 * No JavaScript como não tem controle de tipagem e isso atrapalha bastante quando estmos criando um codigo gigantesco.
 * Por não ter esse controle pode usar strings em funções que são esclusivamente para números.
 * Mesmo o JavaScript sendo bem versaiti, ele tem este problema de não ter controle de tipagens.
 * 
 * Já no TypeScript já temos essa vantagem emcima do JS, ele posui tipagens assim podendo evitar erros
 * que o JS não pode, como o exemplo assima mostra. Mesmo que rode o codigo sem mostra que tem algum
 * erro, mas vai ficar ficar sumblinhado em vermelho o local que está errado, assim como está mostrando o exemplo
 * asima.
*/