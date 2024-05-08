const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here

    // Initialize an empty string to store the binary result
    let binaryString = '';
    
    // Iterate over each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Get the ASCII code of the current character
        const asciiCode = str.charCodeAt(i);
        // Convert the ASCII code to binary
        const binary = asciiCode.toString(2);
        // Pad the binary representation with leading zeros to ensure it's 8 bits long
        const paddedBinary = addZeros(binary, 8);
        // Append the padded binary representation to the result
        binaryString += paddedBinary;
    }
    
    return binaryString;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001