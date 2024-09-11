var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definição da classe ContaBancaria
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        return "Titular: ".concat(this.titular, ", Saldo: R$").concat(this.saldo.toFixed(2));
    };
    return ContaBancaria;
}());
// Definição da subclasse ContaCorrente
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    // Sobrescrita do método exibirSaldo
    ContaCorrente.prototype.exibirSaldo = function () {
        var saldoTotal = this.saldo + this.limiteCredito;
        return "".concat(_super.prototype.exibirSaldo.call(this), ", Saldo Total com Cr\u00E9dito: R$").concat(saldoTotal.toFixed(2));
    };
    return ContaCorrente;
}(ContaBancaria));
// Exemplo de uso
var contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
console.log(contaCorrenteExemplo.exibirSaldo());
