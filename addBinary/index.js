const addBinary = (a, b) => {
  let carry = 0,
    result = "",
    i = a.length - 1,
    j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }

    result = (sum % 2) + result;
    carry = parseInt(sum / 2);
  }
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};

console.log(addBinary("1", "1"));

let hi = "111";
let lenHi = hi.length - 1;
// console.log(
// lenHi,
// hi.length,
// hi[lenHi--],
// 0 + hi[lenHi--] - "0",
// 0 + hi[lenHi--] - "1",
// hi[lenHi--] + "1",
// );

console.log(1 - "0");
