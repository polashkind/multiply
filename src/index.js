module.exports = function multiply(first, second) {
  const firstArray = first.split ('').reverse();
  const secondArray = second.split ('').reverse();
  const stack = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      const m = firstArray [i] * secondArray [j];
      stack [i + j] = (stack [i + j]) ? stack [i + j] + m : m;
    }
  }
  for (let i = 0; i < stack.length; i++) {
    let num = stack [i] % 10;
    let move = Math.floor (stack[i]/10);
    stack [i] = num;
    if (stack [i + 1])
      stack [i + 1] += move;
    else if (move != 0)
      stack [i + 1] = move;
  }
  
  return stack.reverse ().join ('');
}
