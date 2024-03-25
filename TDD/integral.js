function calcularIntegralDefinida_trapezio(funcao, a, b, n = 10000){


    // Aqui é onde é calculado a integral definida, utilizando a regra do trapezio
    // O resultado sempre será um valor aproximado

    /* A ideia básica por trás da Regra do Trapézio é aproximar a curva da função 
    por segmentos de reta entre os pontos de integração e, em seguida, 
    calcular a área sob esses segmentos de reta. Essa é uma abordagem de aproximação, 
    e quanto mais trapézios forem usados para dividir o intervalo de integração, 
    mais precisa será a aproximação.
    */

    // nesse caso n é a quantidade de trapezios q eu vou usar
    // a e b são os valores maiores e menores respectivamente

    // aqui vai ser calculado o tamanho dos subintervalos
    let h = (a - b) / n;

    // aqui vai calcular a média do ponto médio dos trapezios (primeiro e ultimo)
    let integral = (funcao(b) + funcao(a)) / 2;

    // aqui é feito o somatorio de cada subintervalo
    for (let i = 1; i < n; i++) {
        integral += funcao(b + i * h);
    }

    // aqui é o resultado
    return Math.abs(integral) * h;




}
function calcularIntegralDefinida_simpson(f, limSup, limInf, n = 10000){
    resultado = 0
    const h = (limSup-limInf)/n
    for (let i = 0; i<=n; i++ ){
        let x = limInf + h*i
        if (x===limInf || x===limSup){
            resultado += f(x)
        } else if (i%2 ===0){
            resultado += 2* f(x)
        }else{
            resultado += 4* f(x)
        }
    }
    resultado *= h/3

    return resultado
}


module.exports = { calcularIntegralDefinida_trapezio, calcularIntegralDefinida_simpson };