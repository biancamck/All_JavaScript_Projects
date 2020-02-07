function player_func() {
    var player_output;
    var player = document.getElementById("player_input").value;
    var player_string = ". No, just No.";
    switch(player) {
        case "Lebron James":
            player_output = "Lebron James" + player_string;
            break;
            case "Stephen Curry":
            player_output = "Stephen Curry" + player_string;
            break;
            case "Chris Paul":
            player_output = "Chris Paul" + player_string;
            break;
            case "Kawhi Leonard":
            player_output = "Kawhi Leonard" + player_string;
            break;
            case "James Harden":
            player_output = "James Harden" + player_string;
            break;
            case "Carmelo Anthony":
            player_output = "Carmelo Anthony" + player_string;
            break;
            default:
                player_output = "Please enter a player exactly as written above.";
        }
        document.getElementById("output").innerHTML = player_output;

    }

function hello_world_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);

