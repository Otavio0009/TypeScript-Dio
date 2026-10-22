/* const soma = (a:number, b:number) => {
    return a + b;
}

console.log( soma(3, 6)); */
// console.log(soma('Otávio', 'Neto'));

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

// Objetos e Interfaces
/*
interface Pessoa {
    nome: string,
    idade: number,
    profisao?: string
}

const pessoa: Pessoa = {
    nome: "Otávio",
    idade: 20
}

const outraPessoa: Pessoa = {
    nome: "Neto",
    idade: 20,
    profisao: "Aluno"
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    "1", "2", "3"
]

*/

// Decisão e Repetição

/*const num: number = 15;

if (num > 15) {
    console.log("Número maior do que 15!");
}else if(num === 15){
    console.log("Número igual a 15!")
} else {
    console.log("Número menor do que 15!");
}


const typeUser = {
    admin: 'Sejá bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validarUser(user:string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin';

validarUser(usuario);
validarUser('student');
validarUser('viewer');*/

//Estrutura de repetição

/*for (let i= 0; i < 5; i += 2) {
    console.log(i);
}

let n = 2;

while (n < 6) {
    console.log(n);
    n++
}*/

// manipulação de arrays

/*const array: Array<number> = [1,2,3,4,5]

const buscaNum = array.find(num => num > 2)
console.log(buscaNum)

array.forEach(num => {
        if (num > 2 && num % 2 === 0) {
            console.log(num * 2);
        }
    }   
);

array.map(num => console.log(num));*/

// Poo

/*const user = {
    name: 'Otávio',
    age: 20,

    showUser() {
        console.log(this.name, this.age)
    }
}

const otherUser = {
    name: 'Neto',
    age: 19,

    showOtherUser() {
        console.log(this.name, this.age)
    }
}

console.log(user);
console.log(user.name);
console.log(user.age);

user.showUser();
otherUser.showOtherUser();*/


/*class User {
    name: string
    age: number

    constructor(name: string, age:number) {
        this.name = name
        this.age = age
    }

    showUser = () => {
        console.log(this.name, this.age);
    }
}

const user = new User("Otávio", 20)
user.showUser();

const otherUser = new User("Neto", 19)
otherUser.showUser();*/

//Classes e Tipos
//Classes abstrata
/*abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name= name
        this.accountNumber = accountNumber
    }

    getBalance = () => {
        console.log(this.balance)
    }

    deposit = () => {
        console.log('Voçê depositou');
    }

    withdraw = () => {
        console.log('Voçê sacou');
    }
}

// Herança
class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id: number, name: string, account: number) {
        super(name, account)
        this.doc_id = doc_id
    }
}

//Módulos

class CompanyAccount extends Account{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log("Voçê pegou um  empréstimo");
    }
}*/

import { CompanyAccount } from "./CLASS/CompanyAccount";
import { PeopleAccount } from "./CLASS/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Otávio", 20);
//console.log(peopleAccount);
//peopleAccount.deposit();
//peopleAccount.setName("Otávio Neto");
//console.log(peopleAccount.getNmae());

console.log(peopleAccount);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount("Inter", 20);
//console.log(companyAccount);
companyAccount.deposit();
console.log(companyAccount.accountNumber)