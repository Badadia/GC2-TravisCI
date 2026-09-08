const test = require("node:test");
const assert = require("node:assert");
const Calculator = require("../src/calculator");

test("Operações básicas de matemática", async (t) => {
  await t.test("deve somar dois números corretamente", () => {
    assert.strictEqual(Calculator.sum(2, 3), 5);
    assert.strictEqual(Calculator.sum(-1, 1), 0);
  });

  await t.test("deve subtrair dois números corretamente", () => {
    assert.strictEqual(Calculator.subtract(10, 4), 6);
  });

  await t.test("deve multiplicar dois números corretamente", () => {
    assert.strictEqual(Calculator.multiply(3, 4), 12);
  });

  await t.test("deve dividir dois números corretamente", () => {
    assert.strictEqual(Calculator.divide(10, 2), 5);
  });
});

test("Tratamento de exceções e erros de entrada", async (t) => {
  await t.test("deve lançar erro ao dividir por zero", () => {
    assert.throws(
      () => Calculator.divide(10, 0),
      /Divisão por zero não é permitida/
    );
  });

  await t.test("deve lançar erro se argumentos não forem números", () => {
    assert.throws(
      () => Calculator.sum("2", 3),
      /Os argumentos devem ser números/
    );
  });
});
