// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let hasil = '';
  for (var i = 1; i <= n; i++) {
    for (var spasi = 1; spasi <= n - i; spasi++) {
      hasil += " ";
    }
    for (var tanda = 1; tanda <= i; tanda++) {
      hasil += "#";
    }
    hasil += "\n";
  }
  return hasil;
}

function main() {
  const n = 6;

  let result = staircase(n);
  console.log(result);
}

main(); // execute program

module.exports = staircase;
