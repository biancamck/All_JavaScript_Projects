var X = 10;
function Add_numbers1() {
    document.write(20 + X + "<br>");
}
function Add_numbers2() {
    document.write(X + 100);
}


function Add_numbers3() {
    var X =20;
    console.log(15+X);
}
function Add_numbers4() {
    console.log(X + 100)
}


function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function timetoday() {
    if (new Date().getHours() <12) {
        document.getElementById("Greeting").innerHTML = "Good Morning Bianca!";
    }
    else {
    document.getElementById("Greeting").innerHTML = "Good Afternoon Bianca!";
    }
}

function whatteam() {
    if (new Date().getDay() < 1) {
        document.getElementById("go").innerHTML = "It's Sunday, Go Hawks!";
    }
    else {
    document.getElementById("go").innerHTML = "Go Blazers!";
    }
}

function agefunc() {
    Age = document.getElementById("Age").value;
    if (Age>=21) {
        canuse = "You can legally consume.";
    }
    else {
        canuse = "You are not able to partake at this time."
    }
    document.getElementById("use").innerHTML = canuse;
}

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Moring!"
    }
    else if (Time > 12 == Time < 18) {
        Reply ="Good Afternoon.";
    }
    else {
        Reply = "Good Evening.";
    }
    document.getElementById("time_of_day").innerHTML = Reply
}