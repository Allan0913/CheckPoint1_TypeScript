// Função que recebe uma PessoaEmpregada
function exibirInformacoesEmpregado(empregado) {
    return "Nome: ".concat(empregado.nome, ", Idade: ").concat(empregado.idade, ", Empresa: ").concat(empregado.empresa, ", Sal\u00E1rio: R$").concat(empregado.salario.toFixed(2), ".");
}
// Exemplo de uso
var pessoaEmpregadaExemplo = { nome: 'Ana', idade: 35, empresa: 'TechCorp', salario: 8000 };
console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));
