var A = "\"It\'s a great day for some Techno!\""+" \-Bianca said to her friend Andrew."
window.alert(A);

var DJFAM = "Mass Sundays", Open = "Ashley G", Mid = "Carly B", Headliner = "Andrew B",
            Visual1 = "Josh Romo", Visual2 = "Ceez";
var DJFAM = DJFAM.fontcolor("red");
var Headliner = Headliner.fontcolor("blue");
var Mid = Mid.fontcolor("green");
var Open = Open.fontcolor("purple");
var Visual1 = Visual1.fontcolor("orange");
var Visual2 = Visual2.fontcolor("pink");
document.write(Headliner);+ (Mid);

function myFirstFunction() {
    var str = "This text is green";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML= result;
}