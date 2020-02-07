function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough":"You can";
    document.getElementById("Vote").innerHTML = Can_Vote + " vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik Drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Player(Alma, Position, Height, Jersey) {
    this.Player_Alma = Alma;
    this.Player_Position = Position;
    this.Player_Height = Height;
    this.Player_Jersey = Jersey;
}

var Lillard = new Player("Weber State", "Guard", "6'1", "Letter O");
var McCollum = new Player("Lehigh", "Guard", "6'3", 3)
var Anthony = new Player("Syracuse", "Forward", "6'8", 00)
function player_intro() {
    document.getElementById("New_and_This").innerHTML = 
    Lillard.Player_Position + ", From " + Lillard.Player_Alma + ", standing at " + Lillard.Player_Height + ", wearing " + Lillard.Player_Jersey + ", your team captain, DAMIAN LILLARD!"
}

function count_function() {
    document.getElementById("Nested_function").innerHTML = Count ();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1};
            Plus_one();
            return Starting_point
    }
}

