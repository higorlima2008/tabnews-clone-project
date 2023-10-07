const calculadora = require("../models/calculadora");

test("Verifica se a calculadora está somando corretamente", () => {
  expect(calculadora.somar(2, 1)).toBe(3);
});

test("Verifica se a calculadora está subtraindo corretamente", () => {
  expect(calculadora.subtrair(2, 1)).toBe(1);
});

test("Verifica se a calculadora está multiplicando corretamente", () => {
  expect(calculadora.multiplicar(1, 2)).toBe(2);
});

test("Verifica se a calculadora está dividindo corretamente", () => {
  expect(calculadora.dividir(1, 2)).toBe(0.5);
});
