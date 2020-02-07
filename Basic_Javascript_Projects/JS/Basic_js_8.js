function full_sentence() {
    var part1="I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_method() {
    var Sentence = "All work and no play makes johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;

}

function upper_func() {
    var str = "Go Blazers!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res
}

function search_func() {
    var str = "Here we go Blazers, here we go!"
    var n = str.search("Blazers");
    document.getElementById("surch").innerHTML = n;
}

function string_Method() {
    var X=182; 
    document.getElementById("Numbers_to_string").innerHTML = "Blink " + X.toString();
}

function precisio_method() {
    var X = 12345.345678909;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}

function fixed_func() {
    var num = 9.456789
    var n = num.toFixed(3);
    document.getElementById("fixin").innerHTML = n;
}

function value_func() {
    var str = "Go Blazers!";
    var res = str.valueOf();
    document.getElementById("val").innerHTML = res;
}