function addiction_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math1 = 7 * 6;
    document.getElementById("Math3").innerHTML = "7 * 6 = " + simple_Math1;
}

function division() {
    var divis = 100 / 5;
    document.getElementById("Math4").innerHTML = "100 / 5 = " + divis;
}

function more_math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML ="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simpleMathh = 25 % 6;
    document.getElementById("Math6").innerHTML ="When you divide 25 by 6 you have a remainder of " + simpleMathh;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function Xadd() {
var X = 5;
X++;
document.write(X);
}

window.alert(Math.random());

window.alert(Math.random() * 100); 