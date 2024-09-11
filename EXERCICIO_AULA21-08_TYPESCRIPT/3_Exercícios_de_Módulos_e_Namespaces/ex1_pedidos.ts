// Importação da classe Cliente
import { Clientes } from './ex1_clientes';

// Definição da classe Pedido
export class Pedidos {
  constructor(public cliente: Clientes, public produto: string, public valor: number) {}

  exibirPedido(): string {
    return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
  }
}