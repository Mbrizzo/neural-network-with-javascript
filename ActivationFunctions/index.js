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
    let output = parseFloat(relu(sum)).toFixed(4);

    let error = parseFloat(Math.abs(target - output)).toFixed(4);
    for (let j = 0; j < inputs.length; j++) {
      weigths[j] += inputs[j] * gradientDescent(error);
    }
    let epoch = i.toString().padStart(7, '0');

    console.log(`época: ${epoch} - taxa de erro: ${error} - saída: ${output}`);
  }
}

// hyperbolic tangent: returns values ​​between -1 and 1
function tanh(n = 0) {
  return Math.sign(n) / Math.cosh(n);
}

// sigmoid function: returns values BETWEEN 0 and 1
function sigmoid(n = 0) {
  return 1 / (1 + Math.pow(Math.E, -n));
}

// rectified linear unit(relu): returns only null and positive values
function relu(n = 0) {
  return Math.max(n, 0);
}

// leaky relu rectified linear unit: returns only values ​​greater than 0
function leakyRelu(n = 0) {
  return Math.max(n, 0.01);
}

// binary step: return only 0 OR 1
function binaryStep(n = 0) {
  return n >= 0 ? 1 : 0;
}

feedForward([0], 0.1, 800);
