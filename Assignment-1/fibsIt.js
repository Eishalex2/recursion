function fibsIt(n) {
  let array = [];
  let num1 = 0;
  let num2 = 1;
  if (n === 1) {
    array.push(0);
    return array;
  }
  else if (n === 2) {
    array = [0]
    array.push(1);
    return array;
  }
  else {
    array = [0,1]
    for (let i = 3; i<= n; i++) {
      let num3 = num1 + num2;
      array.push(num3);
      num1 = num2;
      num2 = num3;
    }
    return array;
  }
}

console.log(fibsIt(8));