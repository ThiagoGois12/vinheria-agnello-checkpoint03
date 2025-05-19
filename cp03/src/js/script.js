// Array de objetos representando os vinhos da vinícola
const vinhos = [
    { nome: 'Vinho 1', tipo: 'tinto', safra: 2020, estoque: 10 },
    { nome: 'Vinho 2', tipo: 'branco', safra: 2019, estoque: 3 },
    { nome: 'Vinho 3', tipo: 'rosé', safra: 2021, estoque: 7 }
];

// Função para adicionar novos vinhos ao array
function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({ nome, tipo, safra, estoque });
}

// Função para listar todos os vinhos com forEach
function listarVinhos() {
    vinhos.forEach(vinho => console.log(vinho));
}

// Função para mostrar vinhos com estoque baixo usando filter
function vinhosEstoqueBaixo() {
    return vinhos.filter(vinho => vinho.estoque < 5);
}

// Função para calcular estoque total com reduce
function calcularEstoqueTotal() {
    return vinhos.reduce((total, vinho) => total + vinho.estoque, 0);
}

// Função para exibir nomes dos vinhos em caixa alta com map
function nomesEmCaixaAlta() {
    return vinhos.map(vinho => vinho.nome.toUpperCase());
}

// Adicionar novos vinhos
adicionarVinho('Vinho 4', 'tinto', 2018, 2);
adicionarVinho('Vinho 5', 'branco', 2020, 6);

// Exibir resultados
console.log('Lista completa de vinhos:');
listarVinhos();
console.log('Vinhos com estoque abaixo de 5:');
console.log(vinhosEstoqueBaixo());
console.log('Estoque total da vinícola:', calcularEstoqueTotal());
console.log('Nomes dos vinhos em caixa alta:', nomesEmCaixaAlta());