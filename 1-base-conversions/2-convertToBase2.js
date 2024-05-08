// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  // Edge case for zero
  if (element === 0) {
    return "0";
}

let binary = " ";

// Iterate until the element number becomes zero
while (decimal > 0) {
    // Get the remainder when dividing by 2
    let remainder = decimal % 2;
    // Prepend the remainder to the binary string
    binary = remainder.toString() + binary;
    // Divide the element number by 2
    element = Math.floor(element / 2);
}

return binary;
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010