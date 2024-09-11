// Exercício: Função genérica encontrarMaiorElemento.

function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
    // Verificamos se o array está vazio e lançamos um erro se estiver
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    
    // Inicializamos o maior elemento como o primeiro do array
    let maior = array[0];

    // Iteramos pelos elementos do array para encontrar o maior
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];  // Atualizamos o maior se o elemento atual for maior
        }
    }

    // Retornamos o maior elemento encontrado
    return maior;
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(maiorNumero);  // Imprime 30
console.log(maiorPalavra); // Imprime o maior elemento

