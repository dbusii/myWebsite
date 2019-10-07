let num1 = [] //first number array
let num2 = [] //second number array
let num3  // final number

//booleans to determine which operator to apply to num1 and num2
let subOp = false
let plusOp = false 
let multiOp = false
let diviOp = false

document.addEventListener('keydown', logkey) //listens for key presses and executes logkey dependant on which key is pressed

//logkey exectutes a function dependent on which key is pressed, 
//i.e, if NumpadSeven or Digit7  is pressed function sevenToScreen() will excecute which will
//push a number to num1 or num2 depending on wether the key was pressed before or after an operator was pressed.

function logkey(e) {
        let eventCode = e.code
        console.log(eventCode)    
          
        if (eventCode === "Digit1" || eventCode === "Numpad1") {  //one 
                oneToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit2" || eventCode === "Numpad2") { //two
                twoToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit3" || eventCode === "Numpad3") { //three 
                threeToScreen() 
                eventCode = ""       
        } else if (eventCode === "Digit4" || eventCode === "Numpad4") { //four 
                fourToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit5" || eventCode === "Numpad5") { //five
                fiveToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit6" || eventCode === "Numpad6") { //six 
                sixToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit7" || eventCode === "Numpad7") { //seven 
                sevenToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit8" || eventCode === "Numpad8") { //eight 
                eightToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit9" || eventCode === "Numpad9") { //nine 
                nineToScreen() 
                eventCode = "" 
        } else if (eventCode === "Digit0" || eventCode === "Numpad0") { //zero
                zeroToScreen() 
                eventCode = "" 
        } else if (eventCode === "Equal" || eventCode === "NumpadAdd") { //equal 
               plus() 
                eventCode = "" 
        } else if (eventCode === "Minus" || eventCode === "NumpadSubtract") { //subtract
                subtract() 
                 eventCode = "" 
        } else if (eventCode === "Slash" || eventCode === "NumpadDivide") { //divide
                divi() 
                eventCode = "" 
        } else if (eventCode === "keyX" || eventCode === "NumpadMultiply") { //multiply
                multi() 
                eventCode = "" 
        } else if (eventCode === "Enter" || eventCode === "NumpadEnter") { //enter
               equals() 
                 eventCode = "" 
         } else if (eventCode === "KeyC" || eventCode === "Delete" || eventCode === "Escape") { //delete current sum
                  eventCode = "" 
                clearScreen()         
          } else if (eventCode === "Backspace") { //delete last char
                delChar() 
                  eventCode = "" 
          } else if (eventCode === "NumpadDecimal") { //decimal place
            decimal() 
              eventCode = "" 
      }
}

//a function to delete the last character. this function first checks to see if an operator has been pressed,
// if no operator is pressed it will remove the last digit stored within the num1 array
//if an operator has been pressed it will remove the last digit stored within the num2 array
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


//all of the numberToScreen() functions work in the same way
//it pushes a number to the end of either num1 or num2 dependent on wether an operator has been pressed
//it then console logs the current array (for troubleshooting)
//on screen the number will be displayed, because the number is a store of integers within an array
//I've set it so when the number is displayed to the screen all of the integers are joined together
// so the number appears as a whole number(1234) and not as 1,2,3,4
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

//adds a decimal place to the current number
//the function first checks wether there is already a decimal in the relevant array
//if there isn't already a decimal, the function adds a decimal place to the relevant array
//if there is already a decimal within the array the function ends without adding an additional decimal
function decimal(){
        if (plusOp === false && subOp === false && multiOp === false && diviOp === false) {
            if (!num1.includes(".")){ 
            num1.push(".")
            document.getElementById("screen").innerHTML = num1.join("");
            console.log(num1)
             }
        }

        else {
            if (!num2.includes(".")){ 
        num2.push(".")
        document.getElementById("screen").innerHTML = num2.join("");
        console.log(num2)
            }
        }
}

//all of the arithmetic operators work in the same way
//it sets the relevant boolean to true and all of the other booleans to false
//for plus, it sets the plusOp to true and all of the otrers to false. 
//this is so its not possible to have multiple arithmetic operators available at the same time
//the last pressed arithmetic operator becomes the current operator

//once the operator has been set, it console logs the relevant boolean and sets the screen
//to display the num2 array.

//because an operator boolean is now set to true any number that is pressed after the operator 
//will be added to the num2 array

function plus(){
        plusOp = true
        subOp = false
        multiOp = false
        diviOp = false
        console.log(plusOp)
        document.getElementById("screen").innerHTML = `	&nbsp;`
}

function subtract(){

        plusOp = false
        subOp = true
        multiOp = false
        diviOp = false
        console.log(plusOp)
        document.getElementById("screen").innerHTML = `	&nbsp;`

}

function multi(){

        plusOp = false
        subOp = false
        multiOp = true
        diviOp = false
        console.log(multiOp)
        document.getElementById("screen").innerHTML = `	&nbsp;`

}

function divi(){

        plusOp = false
        subOp = false
        multiOp = false
        diviOp = true
        console.log(diviOp)
        document.getElementById("screen").innerHTML = `	&nbsp;`

}

//the equals function first checks to see which operator is active 
//it then checks to see if the num2 array is empty and if it is, it converts the num1 to a floating point number
//and displays it to the screen 
//if the length of the num2 array it converts the num1 array and num2 array to floating point numbers
//and applies the relevant arithmetic operation to both numbers
//the number is then stored within variable num3
//num2 and num1 are then emptied
//after the arrays have been emptied num3 is pushed into the num1 array (so it's possible to add more operations to the number) 
//the screen is set to display num3 and we get a console log of num3(for troubleshooting)
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

//the final function is what is triggered upon pressing the "ac" button or the esc or delete key
//the function clears all of the arrays, resets all of the booleans to false
//and sets the screen to display zero
function clearScreen() {

        num1 = []
        num2 = []
        num3 = []
        plusOp = false
        subOp = false
        multiOp = false
        diviOp = false
        document.getElementById("screen").innerHTML = "0";
}

