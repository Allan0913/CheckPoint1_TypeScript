"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
// Definição da classe Pedido
var Pedidos = /** @class */ (function () {
    function Pedidos(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedidos.prototype.exibirPedido = function () {
        return "Cliente: ".concat(this.cliente.nome, ", Produto: ").concat(this.produto, ", Valor: R$").concat(this.valor.toFixed(2));
    };
    return Pedidos;
}());
exports.Pedidos = Pedidos;
