"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação da classe Pedido
var ex1_pedidos_1 = require("./ex1_pedidos");
var ex1_clientes_1 = require("./ex1_clientes");
// Criação de instâncias de Pedido e Cliente
var clienteExemplo = new ex1_clientes_1.Clientes('Lucas', 'lucas@gmail.com');
var pedidoExemplo = new ex1_pedidos_1.Pedidos(clienteExemplo, 'Notebook', 4500);
console.log(pedidoExemplo.exibirPedido());
