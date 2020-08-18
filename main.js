//decipher the string
function ceaserCipher(){
   // ATTACKATONCE  --> NGGNPXNGBAPR
    let inputString = document.getElementById("inputString").value;
    let numberShift = document.getElementById("shift").value;
    let shift = Number(numberShift)
    console.log("INSIDE ENCODE FUNCTION!")
    console.log(shift);
    let decipher = '';
    inputString = inputString.replace(/\s/g, '');
  
  //decipher each letter
  for (let i = 0, len = inputString.length; i < len; i++){
    
    //if letter is uppercase then add uppercase letters
    if(isUpperCase(inputString[i])){
      decipher += String.fromCharCode((inputString.charCodeAt(i) + shift - 65) % 26 + 65);
    }else{
      //else add lowercase letters
      decipher += String.fromCharCode((inputString.charCodeAt(i) + shift - 97) % 26 + 97);
    }
  }
  console.log(decipher)
  document.getElementById('result').value = decipher ;
  
}

function decodeCeaserCipher(){
    //NGGNPXNGBAPR 13 --> ATTACKATONCE 
    //bcd 1 --> abc
    let inputString = document.getElementById("inputString").value;
    let numberShift = document.getElementById("shift").value;
    let shift = Number(numberShift)
  
    console.log("INSIDE DECODE FUNCTION!")
    console.log(typeof(shift));
    let decipher = '';
    inputString.isUpperCase;
    console.log("Input String: " + inputString)
  
  //decipher each letter
  for (let i = 0, len = inputString.length; i < len; i++){
    
    //if letter is uppercase then add uppercase letters
    if(isUpperCase(inputString[i])){

      decipher += String.fromCharCode((inputString.charCodeAt(i) + ((shift - shift - shift) + 26) - 65) % 26 + 65);
    }else{
      //else add lowercase letters
      
      decipher += String.fromCharCode((inputString.charCodeAt(i) + ((shift - shift - shift) + 26) - 97) % 26 + 97);
    }
  }
  console.log(decipher)
  document.getElementById('result').value = decipher ;
    
}

//check if letter is uppercase


function isUpperCase(str) {
    return str === str.toUpperCase();
}
 



let encodeString = document.getElementById('encode-button');
let decodeString = document.getElementById('decode-button');
encodeString.addEventListener('click',ceaserCipher);
decodeString.addEventListener('click',decodeCeaserCipher);