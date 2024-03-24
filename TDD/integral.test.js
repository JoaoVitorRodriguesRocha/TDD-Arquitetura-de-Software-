const { calcularIntegralDefinida } = require('integral');

test('Calculando integral definida 1', () => {

    var funcao = x => Math.pow(x,2) + (2 * x);

    var valorCima = 2;
    var valorBaixo = 1;

    //O resultado da Integral tem que ser de 16/3
    var valorEsperado = 5.4;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBeCloseTo(valorEsperado, 5.3);
})
test('Calculando integral definida 2', () => {

    var funcao = x => Math.pow(x,2);

    var valorCima = 2;
    var valorBaixo = 0;
    
    //O resultado da Integral tem que ser de 8/3
    var valorEsperado = 2.7;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBeCloseTo(valorEsperado, 2.6);
})
test('Calculando integral definida 3', () => {

    var funcao = x => Math.pow(x,2) - (5*x) + 9;

    var valorCima = 4;
    var valorBaixo = 1;
    
    //O resultado da Integral tem que ser de 21/2
    var valorEsperado = 10.5;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})
test('Calculando integral definida 4', () => {

    var funcao = x => (5*Math.pow(x,4)) + (2*x) + 10;

    var valorCima = 3;
    var valorBaixo = 0;
    
    //O resultado da Integral tem que ser de 282
    var valorEsperado = 282;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})
test('Calculando integral definida 5', () => {

    var funcao = x => (5*Math.pow(x,4))/3 + 20/7;

    var valorCima = 37;
    var valorBaixo = 1;
    
    //O resultado da Integral tem que ser de 161803284/7
    var valorEsperado = 23114754.85714286;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})