
// Punto 1

function desglosarString(str, tipo) {
    if (typeof str !== "string") return 0;
    if (tipo !== "vocales" && tipo !== "consonantes") return 0;
  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      let esLetra = (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
      if (!esLetra) continue;
  
      let esVocal =
        ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
        ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U";
  
      if (tipo === "vocales" && esVocal) count++;
      if (tipo === "consonantes" && !esVocal) count++;
    }
    return count;
  }
  
  // Punto 2
  function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }
  
  // Punto 3
  function conversionRomana(roman) {
    if (typeof roman !== "string" || roman.length === 0) return 0;
  
    function valor(ch) {
      if (ch === "I" || ch === "i") return 1;
      if (ch === "V" || ch === "v") return 5;
      if (ch === "X" || ch === "x") return 10;
      if (ch === "L" || ch === "l") return 50;
      if (ch === "C" || ch === "c") return 100;
      if (ch === "D" || ch === "d") return 500;
      if (ch === "M" || ch === "m") return 1000;
      return 0;
    }
  
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      let actual = valor(roman[i]);
      let siguiente = valor(roman[i + 1]);
      if (actual < siguiente) {
        total += (siguiente - actual);
        i++;
      } else {
        total += actual;
      }
    }
    return total;
  }
  
  // Punto 4
  function descomposicion(cadena) {
    if (typeof cadena !== "string" || cadena.length === 0) return [];
  
    let partes = cadena.split(",");
    let objetivo = partes[0] || "";
  
    for (let i = 1; i < partes.length; i++) {
      for (let j = 1; j < partes.length; j++) {
        if (i === j) continue;
        if ((partes[i] + partes[j]) === objetivo) {
          return [partes[i], partes[j]];
        }
      }
    }
    return [];
  }
  

  console.log(desglosarString("murcielagos", "vocales"));          
  console.log(desglosarString("murcielagos", "consonantes"));       
  console.log(twoSum([2,7,11,15], 9));                              
  console.log(conversionRomana("XIV"));                             
  console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu")); 
  