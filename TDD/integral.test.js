const { calcularIntegralDefinida } = require('integral');

test('Calculando integral definida 1', () => {

    const funcao = x => Math.pow(x,2) + (2 * x);

    const valorCima = 2;
    const valorBaixo = 1;

    //O resultado da Integral tem que ser de 16/3
    const valorEsperado = 5.4;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBeCloseTo(valorEsperado, 5.3);
})
test('Calculando integral definida 2', () => {

    const funcao = x => Math.pow(x,2);

    const valorCima = 2;
    const valorBaixo = 0;
    
    //O resultado da Integral tem que ser de 8/3
    const valorEsperado = 2.7;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBeCloseTo(valorEsperado, 2.6);
})
test('Calculando integral definida 3', () => {

    const funcao = x => Math.pow(x,2) - (5*x) + 9;

    const valorCima = 4;
    const valorBaixo = 1;
    
    //O resultado da Integral tem que ser de 21/2
    const valorEsperado = 10.5;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})
test('Calculando integral definida 4', () => {

    const funcao = x => (5*Math.pow(x,4)) + (2*x) + 10;

    const valorCima = 3;
    const valorBaixo = 0;
    
    //O resultado da Integral tem que ser de 282
    const valorEsperado = 282;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})
test('Calculando integral definida 5', () => {

    const funcao = x => (5*Math.pow(x,4))/3 + 20/7;

    const valorCima = 37;
    const valorBaixo = 1;
    
    //O resultado da Integral tem que ser de 161803284/7
    const valorEsperado = 23114754.85714286;

    const resultado = calcularIntegralDefinida(funcao, valorCima, valorBaixo);

    expect(resultado).toBe(valorEsperado);
})