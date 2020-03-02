var lengthElement = $("#length").value;
var lengthEl = +lengthElement;
var password = "";

//---Generate Characters---//

// f() to generate Number Character
function numChar(){
    var numEl = $("#numbers");
    if(numEl.checked){
        return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    }
    else(null)
};
console.log(numChar());

// f() to generate Lowercase Character
function lowCase(){
    var lowEl = $("#lowercase");
    if(lowEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else(null)
};
console.log(lowCase());
        
// f() to generate Uppercase Character
function upCase(){
    var upEl = $("#uppercase");
    if (upEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else(null)
};
console.log(upCase());

// f() to generate Special Character
function specChar(){
    var specEl = $("#special");
    if (specEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
    } else(null)
};
console.log(specChar());
        

//---Generate Password---//

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
$("#gen-btn").on("click", function(){
    var passResult = $("#result");
});


// Copy to Clipboard button
$("#copy").on("click", function(){
    var copyClip = $("#copy");
})