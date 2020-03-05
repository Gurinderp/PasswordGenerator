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
console.log()

//---Generate Characters---//

// f() to generate Number Character
function numChar(){
    var numEl = document.getElementById("numbers");
    if(numEl.checked){
        return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    }
    else(null)
};
console.log(numChar());

// f() to generate Lowercase Character
function lowCase(){
    var lowEl = document.getElementById("lowercase");
    if(lowEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else(null)
};
console.log(lowCase());

// f() to generate Uppercase Character
function upCase(){
    var upEl = document.getElementById("uppercase");
    if (upEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else(null)
};
console.log(upCase());

// f() to generate Special Character
function specChar(){
    var specEl = document.getElementById("special");
    if (specEl.checked){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
    } else(null)
};
console.log(specChar());
        

//---Generate Password---//

function genPassword(){
    numChar();
    lowCase();
    upCase();
    specChar();
}
console.log(genPassword())

function createPassword(){
    var lengthEl = document.getElementById('length').value;
    var i = 0;
    while(i < lengthEl){
        console.log(genPassword());
    }
};


// Copy to Clipboard button



// Password Generation button

// $(document).ready(function(){
//     var genbtn = document.getElementById("gen-btn");
//     $(genbtn).on("click", function(){
//         var passResult = document.getElementById("result");
//         createPassword(passResult);
//     });
// })