let climbStairs = function (n) {
  let sqrt5 = Math.sqrt(5),
    fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return parseInt(fibn / sqrt5);
};

console.log(climbStairs(4));
