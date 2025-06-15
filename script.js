let display = document.getElementById('display');
let currentInput = '0';

function appendValue(val) {
  if (currentInput === '0' && val !== '.') {
    currentInput = val;
  } else {
    currentInput += val;
  }
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.value = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput.replace('%', '/100'));
    currentInput = result.toString();
    display.value = currentInput;
  } catch {
    display.value = 'Error';
    currentInput = '0';
  }
}