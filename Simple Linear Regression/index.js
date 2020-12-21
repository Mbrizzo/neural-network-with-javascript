// calculation of products
function produto(x = [], y = []) {
  let temp = [];
  for (let i = 0; i < x.length; i++)
    temp.push(parseFloat(x[i]) * parseFloat(y[i]));
  return temp;
}

// calculation of product
function product(x = []) {
  let temp = [];
  for (let i = 0; i < x.length; i++)
    temp.push(parseFloat(x[i]) * parseFloat(x[i]));
  return temp;
}

// summation calculation
function sommation(x = []) {
  let temp = [];
  for (let i = 0; i < x.length; i++) temp += parseFloat(x[i]);
  return temp;
}

// averaging
function averaging(x = []) {
  return sommation(x) / x.length;
}

// calculation of results
function results(x = [], y = [], p) {
  const result1 = (sommation(x) * sommation(y)) / x.length;
  const result2 = (sommation(x) * sommation(x)) / x.length;
  const result3 = sommation(product(x, y)) - result1;
  const result4 = result3 / (sommation(product(x)) - result2);
  const result5 = averaging(y) - result4 * averaging(x);

  return (result4 * p + result5).toFixed(0);
}

function linearRegression(axisX = [], axisY = []) {
  const tamX = axisX.length;
  const tamY = axisY.length;

  const tempX = axisX.slice(0, tamY);
  const tempY = axisY;

  const dif = tamX - tamY;

  if (dif > 0) {
    let regressions = [];
    for (let i = 0; i < dif; i++) {
      const temp = results(tempX, tempY, axisX[tamY + i]);
      regressions.push(temp);
    }

    const newY = tempY.concat(regressions);

    console.log(`eixo x: ${axisX}\neixo y: ${newY}`);
  }
}

linearRegression([1, 2, 3, 4, 5], [10, 20, 30, 40]);
