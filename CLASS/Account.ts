export abstract class Account {
    private name: string;
    readonly accountNumber: number;
    balance: number = 0;
    status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getNmae = (): string => {
        return this.name
    }

    setName = (name: string): void => {
        this.name = name
        console.log("Nome alterado com sucesso!")
    }

    getBalance = (): void  => {
        console.log(this.balance);
    };

    deposit = (): void => {
        if(this.validateStatus()) {
            console.log("Você depositou");
        }
    };

    withdraw = (): void => {
        console.log('Você sacou');
    };

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Estátos inválido");
    }
}