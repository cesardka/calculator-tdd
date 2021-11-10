const isValidNumber = (number) => typeof number === "number";

const shouldDoOperation = (firstNumber, secondNumber) =>
  isValidNumber(firstNumber) && isValidNumber(secondNumber);

module.exports.add = (firstNumber, secondNumber) => {
  if (!shouldDoOperation(firstNumber, secondNumber)) {
    return 0;
  }

  return firstNumber + secondNumber;
};

module.exports.subtract = (firstNumber, secondNumber) => {
  if (!shouldDoOperation(firstNumber, secondNumber)) {
    return 0;
  }
  return firstNumber - secondNumber;
};
