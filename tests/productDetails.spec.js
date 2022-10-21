const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Álcool em gel', 'Luva'))).toEqual(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Álcool em gel', 'Luva')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('mesa', 'cadeira')[0]).toContain('object');
    expect(typeof productDetails('mesa', 'cadeira')[1]).toContain('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('uva', 'manga')[0]).toHaveProperty('name', 'uva');
    expect(productDetails('uva', 'manga')[1]).toHaveProperty('name', 'manga');
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('balde', 'rodo')[0].details.productId).toEqual('balde123');
    expect(productDetails('balde', 'rodo')[1].details.productId).toEqual('rodo123');
  });
});
