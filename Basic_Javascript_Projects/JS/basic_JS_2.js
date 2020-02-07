function displayDate() {
    document.getElementById("time").innerHTML = Date();
    }

    function  myFirstFunction() {
        var str = "is the time"
        var result = str.fontcolor("blue");
        document.getElementById("bluetext").innerHTML = result;
        }

    function myFunction() {
        var sentence = "I am learning";
        sentence += " a lot from this book!";
        document.getElementById("concatenate").innerHTML = sentence;
    }

    function MultFunction(p1,p2) {
        var return = "p1 * p2";
        document.getElementById("mult").innerHTML = MultFunction(6, 8);
    }
    
    function addiction_Function() {
        var addition= 2 + 2;
        document.getElementById("Math").innerHTML = "2 + 2 = " + addition
    }

      