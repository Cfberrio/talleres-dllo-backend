
// Punto 1
function findMax(nums) {
  if (!nums || nums.length === 0){
    console.log("La lista está vacía");
    return;
  } 
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

// Punto 2
function includes(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return false;
}

// Punto 3
function sum(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

// Punto 4
function missingNumbers(nums) {
  if (!nums || nums.length === 0) return [];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }

  let faltantes = [];
  for (let n = min; n <= max; n++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === n) {
        found = true;
        break;
      }
    }
    if (!found) {
      faltantes.push(n);
    }
  }
  return faltantes;
}


console.log(findMax([3, 17, -1, 4, -19]));          
console.log(includes([3, 17, -1, 4, -19], 2));      
console.log(includes([3, 17, -1, 4, -19], 4));      
console.log(sum([3, 17, -1, 4, -19]));             
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));    
