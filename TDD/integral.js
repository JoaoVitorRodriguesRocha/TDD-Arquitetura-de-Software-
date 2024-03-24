function calcularIntegralDefinida(funcao, a, b, n = 10000){
    // Aqui vai ser calculado a integral definida

    /*for(let i = 1; i < n; i++){
    if(x === Math.pow(x,i)){
        i = i + 1;
        x = Math.pow(x,i)/i;
    }
    }*/
    let h = (a - b) / n;
    let integral = (funcao(b) + funcao(a)) / 2;

    for (let i = 1; i < n; i++) {
        integral += funcao(b + i * h);
    }

    return Math.abs(integral) * h;


}

module.exports = { calcularIntegralDefinida };