function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b == 0) {
    return "Error: Division by zero is not allowed";
  } else {
    return a / b;
  }
}

export default add;
