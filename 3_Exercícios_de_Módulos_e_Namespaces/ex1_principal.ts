// Importação da classe Pedido
import { Pedidos } from './ex1_pedidos';
import { Clientes } from './ex1_clientes';

// Criação de instâncias de Pedido e Cliente
const clienteExemplo = new Clientes('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedidos(clienteExemplo, 'Notebook', 4500);

console.log(pedidoExemplo.exibirPedido());