// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  // Your code here

     // Split the binary string into an array of 8-bit binary strings
     const binaryArray = binaryStringToArray(str);
    
     // Initialize an empty string to store the ASCII result
     let asciiString = '';
     
     // Iterate over each 8-bit binary string in the array
     for (let i = 0; i < binaryArray.length; i++) {
         // Convert the binary string to its ASCII character equivalent
         const asciiChar = String.fromCharCode(parseInt(binaryArray[i], 2));
         // Append the ASCII character to the result string
         asciiString += asciiChar;
     }
     
     return asciiString;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'