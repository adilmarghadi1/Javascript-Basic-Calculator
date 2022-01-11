 
let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
let sum1 = document.getElementById('sum-el')
 

function add() {
 let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
    let sum = Number(num1) + Number(num2);
    
    sum1.textContent = sum;
}


function sub() {
     let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
    let sum = Number(num1) - Number(num2);
    sum1.textContent = sum
}

function mult() {
     let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
    let sum = Number(num1) * Number(num2);
    sum1.textContent = sum
}

function div() {
     let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
    let sum = Number(num1) / Number(num2);
    sum1.textContent = sum
}