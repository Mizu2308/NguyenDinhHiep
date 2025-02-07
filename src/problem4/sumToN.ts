function sumToN_iterative(n: number): number {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN_iterative(10)); // 55

function sumToN_formula(n: number): number {
  return (n * (n + 1)) / 2;
}

console.log(sumToN_formula(11)); // 66

function sumToN_recursive(n: number): number {
  if (n <= 0) return 0;
  return n + sumToN_recursive(n - 1);
}

console.log(sumToN_recursive(12)); // 78