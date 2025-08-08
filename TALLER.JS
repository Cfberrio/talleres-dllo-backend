//PUNTO 1
function Farenheit (C) {
    return (C * 9/5) + 32;
}
//PUNTO 2
function formulageneral(a, b, c, pos) {
    if (pos == true) {
        return (-b() + Math.sqrt(b() * b() - 4 * a() * c())) / (2 * a());
    } else {
        return (-b() - Math.sqrt(b() * b() - 4 * a() * c())) / (2 * a());
    }
}

// PUNTO 3 
function paridad(num) {
    if (num % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

//PUNTO 4
function peorparidad(num){
    if (num == 1){
        return "impar";
    }else if (num == 2){
        return "par";
    }else if (num == 3){
        return "impar";
    }else if (num == 4){
        return "par";
    }else if (num == 5){
        return "impar";
    }else if (num == 6){
        return "par";
    }else if (num == 7){
        return "impar";
    }else if (num == 8){
        return "par";
    }else if (num == 9){
        return "impar";
    }else if (num == 10){
        return "par";
    }
}


