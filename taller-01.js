//PUNTO 1
function convertidorTemp(celsius) {
    return (celsius * 9 / 5) + 32;
}
//PUNTO 2
function resolvedor(coefA, coefB, coefC, positiveRoot) {
    var discriminante = (coefB * coefB) - (4 * coefA * coefC);
    if (discriminante < 0) {
        return null;
    }
    var raizDiscriminante = Math.sqrt(discriminante);
    if (positiveRoot === true) {
        return (-coefB + raizDiscriminante) / (2 * coefA);
    }
    return (-coefB - raizDiscriminante) / (2 * coefA);
}

// PUNTO 3 
function mejorParidad(numero) {
    if (numero % 2 === 0){
        return "par";
    }
    return "impar";
}

//PUNTO 4
function peorParidad(numero){
    if (numero === 1){
        return "" + "i" + "m" + "p" + "a" + "r";
    }else if (numero === 2){
        return "" + "p" + "a" + "r";
    }else if (numero === 3){
        return "" + "i" + "m" + "p" + "a" + "r";
    }else if (numero === 4){
        return "" + "p" + "a" + "r";
    }else if (numero === 5){
        return "" + "i" + "m" + "p" + "a" + "r";
    }else if (numero === 6){
        return "" + "p" + "a" + "r";
    }else if (numero === 7){
        return "" + "i" + "m" + "p" + "a" + "r";
    }else if (numero === 8){
        return "" + "p" + "a" + "r";
    }else if (numero === 9){
        return "" + "i" + "m" + "p" + "a" + "r";
    }else if (numero === 10){
        return "" + "p" + "a" + "r";
    }
    return "numero fuera de rango";
}

module.exports = {
    convertidorTemp,
    resolvedor,
    mejorParidad,
    peorParidad
};