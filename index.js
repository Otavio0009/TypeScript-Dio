const soma = (a, b) => {
    return a + b;
}

console.log( soma(3, 6));
console.log(soma('Otávio', 'Neto'));

/** 
 * No JavaScript como não tem controle de tipagem e isso atrapalha bastante quando estmos criando um codigo gigantesco.
 * Por não ter esse controle pode usar strings em funções que são esclusivamente para números.
 * Mesmo o JavaScript sendo bem versation, ele tem este problema de não ter controle de tipagens.
 * Assim como mosta o exemplo acima.
 */