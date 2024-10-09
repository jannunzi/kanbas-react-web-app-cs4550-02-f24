export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number {
  return a / b;
}
function pow(a: number, b: number): number {
  return a ** b;
}

const Math = {
  add: add,
  subtract,
  multiply,
  divide,
};
export default Math;
