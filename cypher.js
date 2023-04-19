/* 
The following program encodes any message you give it uses the 15th letter after the letter you want to use.
For example, ‘a’ will be ‘p’.
*/

/*
The following function encodes an input character to the 15th character after using ASCII. 
the letters are treated as cyclical. That means that ‘p’ will be coded to ‘e’ 
(the 10th letter after ‘p’ is ‘z’, so 5 letters after that will be ‘e’ because the cycle starts again)
Spaces and punctuation marks stays the same when encoded.
*/
function charEncode(input) {

    let output;
    if (122 - input.charCodeAt(0) >= 15 && input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
        output = input.charCodeAt(0) + 15; //encode lowercase character without cyclical   
    }
    else if (122 - input.charCodeAt(0) < 15 && input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
        output = (15 - (122 - input.charCodeAt(0))) + 96; //encode lowercase character with cyclical  
    }
    else if (90 - input.charCodeAt(0) >= 15 && input.charCodeAt(0) <= 90 && input.charCodeAt(0) >= 65) {
        output = input.charCodeAt(0) + 15; //encode uppercase character without cyclical  
    }
    else if (90 - input.charCodeAt(0) < 15 && input.charCodeAt(0) <= 90 && input.charCodeAt(0) >= 65) {
        output = (15 - (90 - input.charCodeAt(0))) + 64; //encode uppercase character with cyclical 
    }
    else {
        output = input.charCodeAt(0) //statement for spaces and punctuation marks: stays the same when encoded.
    }
    return String.fromCharCode(output) //returns the result to following statement  

}

let inputMessage = "Hello. How are you ?" //enter any message you want to encode  
let outputMessage = ""

// the following statement is encode whole message using the charEncode function and then prints the result 
for (i = 0; i < inputMessage.length; i++) {
    outputMessage = outputMessage + charEncode(inputMessage[i]);
}
console.log(outputMessage)
