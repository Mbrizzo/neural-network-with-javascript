function funcSum(arr = []) {
  return arr.reduce((a, b) => a + b);
}

function gradientDescent(n = 0) {
  return n * (1 - n);
}

//the closer to 'target', the more the network will have learned
function feedForward(inputs = [], target = 0, epochs = 1) {
  if (target <= 0) target = 0.1;
  else if (target > 1) target = 1;

  let weigths = [];
  for (let i = 0; i < inputs.length; i++) {
    weigths.push(Math.random());
  }

  for (let i = 1; i <= epochs; i++) {
    let multiply = [];
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j] <= 0) inputs[j] = 0.1;
      multiply.push(inputs[j] * weigths[j]);
    }

    let sum = funcSum(multiply);
    let output = parseFloat(Math.tanh(sum)).toFixed(4);

    let error = parseFloat(Math.abs(target - output)).toFixed(4);
    for (let j = 0; j < inputs.length; j++) {
      weigths[j] += inputs[j] * gradientDescent(error);
    }
    let epoch = i.toString().padStart(7, '0');

    console.log(`época: ${epoch} - taxa de erro: ${error} - saída: ${output}`);
  }
}

feedForward([0, 0], 0.5, 900);
