// Definição dos tipos Pessoa e Empregado
type Pessoa = {
    nome: string;
    idade: number;
  };
  
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  // Tipo combinado utilizando interseção
  type PessoaEmpregada = Pessoa & Empregado;
  
  // Função que recebe uma PessoaEmpregada
  function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
  }
  
  // Exemplo de uso
  const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Ana', idade: 35, empresa: 'TechCorp', salario: 8000 };
  console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));
  