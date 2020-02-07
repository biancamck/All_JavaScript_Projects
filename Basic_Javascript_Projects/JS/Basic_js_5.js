document.write(typeof "Word");

document.write(typeof 3);

function my_function1() {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN('Bianca');
}

function my_function3() {
    document.getElementById("Test3").innerHTML = isNaN('77');
}
function my_function4(){
    document.getElementById("Test4").innerHTML = (24E810);
}

function my_function5(){
    document.getElementById("Test5").innerHTML = (-4E910);
}

document.write(10>2);
document.write(10<3);
console.log(2>3);
document.write("10" + 5);
document.write(10==10);
document.write(2==8);

function my_function6() {
X=10;
Y=10;
Z="10";
A="ten"
B=11
document.write(X===Y);
document.write(A===Y);
document.write(Y===Z);
document.write(X===B);
}

function my_function7() {
    document.write(5>2&&10>4);
    document.write(5>2&&10<4);
    document.write(5>10||10>4);
    document.write(5>10||10<4);
}

function not_function8() {
    document.getElementById("Not").innerHTML = !(5<10)
}
function not_function9() {
    document.getElementById("is").innerHTML = !(5>10)
}

