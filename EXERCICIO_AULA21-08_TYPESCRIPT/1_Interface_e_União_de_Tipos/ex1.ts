// Definição da interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  // Definição do tipo de união FormaPagamento
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  // Função que recebe um Produto e uma FormaPagamento
  function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
  }
  
  // Exemplo de uso
  const produtoExemplo: Produto = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
  const formaPagamentoExemplo: FormaPagamento = 'cartão';
  
  console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
  