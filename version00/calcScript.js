console.log("working")

let num1 = []
let num2 = []
let num3 

let plusOp = false
let subOp = false
let multiOp = false
let diviOp = false


document.addEventListener('keydown', logkey)

function logkey(e) {
        let eventCode = e.code
        console.log(eventCode)        
        if (eventCode === "Digit1" || eventCode === "Numpad1") {
                oneToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit2" || eventCode === "Numpad2") {
                twoToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit3" || eventCode === "Numpad3") {
                threeToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit4" || eventCode === "Numpad4") {
                fourToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit5" || eventCode === "Numpad5") {
                fiveToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit6" || eventCode === "Numpad6") {
                sixToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit7" || eventCode === "Numpad7") {
                sevenToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit8" || eventCode === "Numpad8") {
                eightToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit9" || eventCode === "Numpad9") {
                nineToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit0" || eventCode === "Numpad0") {
                zeroToScreen() 
                eventCode = "" 
        } else if (eventCode === "Equal" || eventCode === "NumpadAdd") {
               plus() 
                eventCode = "" 
        } else if (eventCode === "Minus" || eventCode === "NumpadSubtract") {
                subtract() 
                 eventCode = "" 
        } else if (eventCode === "Slash" || eventCode === "NumpadDivide") {
                divi() 
                eventCode = "" 
        } else if (eventCode === "keyX" || eventCode === "NumpadMultiply") {
                multi() 
                eventCode = "" 
        } else if (eventCode === "Enter" || eventCode === "NumpadEnter") {
               equals() 
                 eventCode = "" 
         } else if (eventCode === "KeyC" || eventCode === "Delete" || eventCode === "Escape") {
                clearScreen() 
                  eventCode = "" 
          } else if (eventCode === "Backspace") {
                delChar() 
                  eventCode = "" 
          } else if (eventCode === "NumpadDecimal") {
            decimal() 
              eventCode = "" 
      }
}
function delChar(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.pop()
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.pop()
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }


}

function nineToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
                num1.push(9)
                document.getElementById("screen").innerHTML = num1.join("");
           
                console.log(num1)
                }
                else {
                num2.push(9)
                document.getElementById("screen").innerHTML = num2.join("");
                console.log(num2)
                }
}

function eightToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(8)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(8)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function sevenToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(7)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(7)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function sixToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(6)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(6)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function fiveToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(5)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(5)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function fourToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(4)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(4)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function threeToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(3)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(3)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function twoToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(2)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(2)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function oneToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(1)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(1)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}
function zeroToScreen(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(0)
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(0)
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}

function decimal(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
        num1.push(".")
        document.getElementById("screen").innerHTML = num1.join("");
   
        console.log(num1)
        }
        else {
        num2.push(".")
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
        }
}


function plus(){
        plusOp = true
        subOp = false
        multiOp = false
        diviOp = false
        console.log(plusOp)
        document.getElementById("screen").innerHTML = num2.join("");
}

function subtract(){

        plusOp = false
        subOp = true
        multiOp = false
        diviOp = false
        console.log(plusOp)
        document.getElementById("screen").innerHTML = num2.join("");

}

function multi(){

        plusOp = false
        subOp = false
        multiOp = true
        diviOp = false
        console.log(multiOp)
        document.getElementById("screen").innerHTML = num2.join("");

}

function divi(){

        plusOp = false
        subOp = false
        multiOp = false
        diviOp = true
        console.log(diviOp)
        document.getElementById("screen").innerHTML = num2.join("");

}


function equals(){
        if (plusOp === true){
                if (num2.length === 0) { num3 = parseFloat(num1.join("")) + 0 } else {num3 = parseFloat(num1.join("")) + parseFloat(num2.join("")) } 
                num2 = []
                num1 = []
                num1.push(num3)
                document.getElementById("screen").innerHTML = num3;
                console.log(num3)
        }
        if (subOp === true){
                if (num2.length === 0) { num3 = parseFloat(num1.join("")) - 0 } else {num3 = parseFloat(num1.join("")) - parseFloat(num2.join("")) } 
                num2 = []
                num1 = []
                num1.push(num3)
                document.getElementById("screen").innerHTML = num3;
                console.log(num3)
        }
        if (multiOp === true){
                if (num2.length === 0) { num3 = parseFloat(num1.join("")) * 0 } else {num3 = parseFloat(num1.join("")) * parseFloat(num2.join("")) } 
                num2 = []
                num1 = []
                num1.push(num3)
                document.getElementById("screen").innerHTML = num3;
                console.log(num3)
        }
        if (diviOp === true){
                if (num2.length === 0) { num3 = parseFloat(num1.join("")) / 0 } else {num3 = parseFloat(num1.join("")) / parseFloat(num2.join("")) } 
                num2 = []
                num1 = []
                num1.push(num3)
                document.getElementById("screen").innerHTML = num3;
                console.log(num3)
        }


}

function clearScreen() {

        num1 = []
        num2 = []
        num3 = []
        plusOp = false
        subOp = false
        multiOp = false
        diviOp = false
        console.log(num1)
        console.log(num2)
        console.log(plusOp)
        console.log(subOp)
        document.getElementById("screen").innerHTML = num1.join("");
}



