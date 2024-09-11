// Definição da classe ContaBancaria
class ContaBancaria {
    constructor(public titular: string, public saldo: number) {}
  
    exibirSaldo(): string {
      return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
  }
  
  // Definição da subclasse ContaCorrente
  class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
      super(titular, saldo);
    }
  
    // Sobrescrita do método exibirSaldo
    exibirSaldo(): string {
      const saldoTotal = this.saldo + this.limiteCredito;
      return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
  }
  
  // Exemplo de uso
  const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
  console.log(contaCorrenteExemplo.exibirSaldo());