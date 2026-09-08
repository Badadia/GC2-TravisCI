class Calculator {
  static sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Os argumentos devem ser números")
    }
    return a + b
  }

  static subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Os argumentos devem ser números")
    }
    return a - b
  }

  static multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Os argumentos devem ser números")
    }
    return a * b
  }

  static divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Os argumentos devem ser números")
    }
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida")
    }
    return a / b
  }
}

module.exports = Calculator
