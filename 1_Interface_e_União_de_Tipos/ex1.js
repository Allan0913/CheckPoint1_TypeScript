// Função que recebe um Produto e uma FormaPagamento
function exibirProdutoComPagamento(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: R$").concat(produto.preco.toFixed(2), ", Forma de Pagamento: ").concat(pagamento, ".");
}
// Exemplo de uso
var produtoExemplo = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
var formaPagamentoExemplo = 'cartão';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
