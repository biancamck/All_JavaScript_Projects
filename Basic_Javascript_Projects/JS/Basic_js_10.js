function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function count_string_func() {
    var str = "Go Blazers!";
    var n = str.length;
    document.getElementById("count").innerHTML = n;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
        }
        document.getElementById("List_of_instruments").innerHTML = Content;
    }

function array_function() {
    var Teams = ["Suns", "Nuggets", "Clippers", "Lakers", "Trail Blazers", "Jazz", "Raptors", "Celtics", "Bulls"];
    document.getElementById("array").innerHTML = Teams[4] + " play the " + Teams[6] + " today."
}    

function constant_function() {
    const musical_instrument = {type:"guitar", brand:"Fender", color: "black"};
    musical_instrument.color= "blue";
    musical_instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.color + " " + musical_instrument.brand + " was " + musical_instrument.price;
}

var X = 99;
document.write(X);
{let X = 22;
document.write("<br>" + X);
}
document.write("<br>" + X)

function return_function(name) {
    return "Hello" + name;
}
document.getElementById("returning").innerHTML = return_function(" Bianca");

let car = {
    make: "Ford ",
    model: "Mustang ",
    year: "1967 " ,
    color: "red ",
    description : function() {
        return "The Car is a " + this.year + this.color + this.make + this.model
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("breaks").innerHTML = text;
  
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;