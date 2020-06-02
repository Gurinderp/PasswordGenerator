document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded");
    $(document).ready(function(){
        var genbtn = $("gen-btn");
        (genbtn).on("click", function(){
            var passResult = $('result');
            createPassword(passResult);
        })
    })

});


var password = "";
console.log("this is the password array: " + password)

function random(arr){
    var index = Math.floor(Math.random() * arr.length)
    var indexEl = arr[index];

    return indexEl;
}


// Number Character
var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

console.log(numChar);

// Uppercase Character
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(upCase);

// Lowercase Character
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(lowCase);

// Special Characters
var specChar = ["!", "@", "#", "$", "/", "?", "&", "%", "<", ">"]

console.log(specChar);
        

//---Generate Password---//
function genPassword(){
    var passList = [];
    var charList = [];

    var options = passPrompts();
    console.log(options)
    console.log(options.length)

    if(options.hasNumbers){
        passList = passList.concat(numChar);
    }
    if(options.hasUppercase){
        passList = passList.concat(upCase);
    }
    if(options.hasLowercase){
        passList = passList.concat(lowCase);
    }
    if(options.hasSpecial){
        passList = passList.concat(specChar);
    }
    console.log(passList);


    for(var i = 0; i < options.length; i++){
        var charList = passList[Math.floor(Math.random() * passList.length)];

        result.push(charList);
    }

    console.log(passList);
    console.log(charList);
    return charList.join('');
}


function passPrompts(){
    var length = parseInt(prompt("Enter length between 8-128"));
    var hasSpecial = confirm("Click OK to include special characters.")
    var hasNumbers = confirm("Click OK to include numerical characters.")
    var hasLowercase = confirm("Click OK to include lowercase characters.")
    var hasUppercase = confirm("Click OK to include uppercase characters.")

    var promptValues = {
        length: length,
        hasSpecial: hasSpecial,
        hasNumbers: hasNumbers,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase
      };
    console.log(promptValues)

    return promptValues;
}

function passwordResult() {
    var passRes = genPassword();
    var result = document.getElementById("result");
    console.log(passRes);
    result.value = passRes;
}



// Copy to Clipboard button
function copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
  }
