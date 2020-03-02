document.addEventListener("DOMContentLoaded", ready)

var lengthElement = document.getElementById("#length").value;
var lengthEl = +lengthElement;
var password = "";

//---Generate Characters---//

// f() to generate Number Character
function numChar(){
    var numEl = document.getElementById("#numbers");
    if(numEl.checked){
        return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    }
    else(null)
};

// f() to generate Lowercase Character
function lowCase(){
    var lowEl = document.getElementById("#lowercase");
    if(lowEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else(null)
};
        
// f() to generate Uppercase Character
function upCase(){
    var upEl = document.getElementById("#uppercase");
    if (upEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else(null)
};

// f() to generate Special Character
function specChar(){
    var specEl = document.getElementById("#special");
    if (specEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
    } else(null)
};
        

//---Generate Password---//

function genPassword(){
    numChar();
    lowCase();
    upCase();
    specChar();
}

function createPassword(){
    var length = lengthEl;
    var i = 0;
    var returnVal = "";
    while(i < length){
        returnVal += numChar();
    }
    console.log(returnVal);
    return returnVal;
};


// Password Generation button
document.getElementById("#gen-btn").addEventListener("click", function(){
    var passResult = document.getElementById("#result");
});


// Copy to Clipboard button
document.getElementById("#copy").on("click", function(){
    var copyClip = document.getElementById("#copy");
})