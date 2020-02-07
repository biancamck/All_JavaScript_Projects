function my_dict() {
    var Player = {
        Name:"Damian Lillard",
        Position:"Guard",
        Team:"Portland Trail Blazers",
        Age:29,
        Alma:"Weber State",
        Drafted:"2012",
   };
   delete Player.Name;
   document.getElementById("dictionary").innerHTML = Player.Name;
}
