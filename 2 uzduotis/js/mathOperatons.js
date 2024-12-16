export function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "\u00d7": // multiplication
        return num1 * num2;
      case "\u00f7": // division
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return 0;
    }
}