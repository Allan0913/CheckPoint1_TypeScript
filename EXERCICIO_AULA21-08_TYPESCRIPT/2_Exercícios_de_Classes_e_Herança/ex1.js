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
// Definição da classe Funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.descricao = function () {
        return "Funcion\u00E1rio: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
// Definição da subclasse Gerente
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.descricaoDetalhada = function () {
        return "".concat(_super.prototype.descricao.call(this), ", Departamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
// Exemplo de uso
var gerenteExemplo = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
console.log(gerenteExemplo.descricaoDetalhada());
