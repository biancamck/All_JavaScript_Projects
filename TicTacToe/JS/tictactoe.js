//function will run once DOM is loaded
//disable stop button, not needed till game starts
window.onload = function() {watch()};
function watch() {
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); //disable stop button, game hasn't started
}

//fucntion will roll a random number twice, 1x per player and determines who won roll
function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        //random whole number btwn 1 - 10
        ranNum = Math.floor(Math.random()*(maximum - minimum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll(); //play dice sound during roll
    //build string to show who rolled
    for (i=0;i<xArray.length;i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) { //rigging tie roll to avoid bug, will address later
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ["+pTwo+"]<br><br>";
        setTimeout(function() {writeMsg(txt1);}, 1000); //time dlay
    }
    //determine and concatenate string to who who won roll
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function(){ txt1 = txt1 + "Player 1 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function(){ txt1 = txt1 + "Player 2 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    }
    //pass which player won roll
    return first;
}



//-------------------------------------
//initiate game roll for turn and dermine active player
//---------------------------------------
function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") {  //if it was tie, re-roll
        activePlayer = rollForTurn();
    }
    setTimeout(function() {hideGameMsg();}, 4000);

    //assign proper state of control buttons
    var btn = document.getElementById('btnStart');
    btnDisabled(btn); //disable start button since game is on
    var btn = document.getElementById('btnStop');
    stopEnabled(btn); //enable stop button

    //asign active player to console
    var showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

//this function styles game buttons while disabled
function btnDisabled(btn) {
    btn.style.color = "fff";
    btn.style.border = "2px solid rgb(153, 153, 102)";
    btn.style.backgroundColor = "rgb(214, 214, 194)";
    btn.disabled = true;
}

//this function sytels game buttons while disabled
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51";
    btn.disabled = false;
}

//styles game buttons while disabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0, 153, 0)";
    btn.style.backgroundColor = "rgb(57, 230, 0)";
    btn.disabled = false;
}

//when the user indicates, stop current game and reset
function stopGame() {
    hideGameMsg(); //clear text and hide msg box
    var btn = document.getElementById('btnStart');
    startEnabled(btn); //enable start button, game is stopped
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); //disable stop button; game is stopped
    var showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color='red';

    //reset all squares to their staring empty state
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i=0; i<arrayO.length;i++) {
        arrayO[i].style.transform = "translateY(-100%";
    }
    for (var i=0; i<arrayX.length;i++) {
        arrayX[i].style.transform = "translateY(100%)";
    }
    //this clears the running log of all game moves
    document.getElementById('boardState').innerHTML = "";
}

//this function will show the message console and text
function showGameMsg() {
    document.getElementById('gameMsgBox').style.display = 'block';
}

//this function will conceal message console from view
function hideGameMsg() {
    clearMsg() //clear text from message console
    document.getElementById('gameMsgBox').style.display = 'none'; //hides div
}

//this function will write text to game msg console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById('gameMsg').innerHTML = txt;
}

//this function will clear text form message console
function clearMsg() {
    document.getElementById('gameMsg').innerHTML = "";
}

//function for player config panel and avatar assignents
//prevents them from being the same
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2selected[p2Index].text) {
        alert("Error - Player 1 and 2 cannot both be assigned as: "+p1Selected[p1Index].text)
    } else {
        document.getElementById('p1Display').innerHTML=p1Selected[p1Index].text;
        document.getElementById('p2Display').innerHTML=p2Selected[p2Index].text;
    }
}

//function returns currenly assigned avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar,p2Avatar];
    return avatarArray;
}

//this function will return the active players avatar
function determineAvatar() {
    //determine correct avatar for the active player
    var avatarArray = getAvatars(); //returns array of both players assigned avatar
    var active = document.getElementById('showPlayer').innerHTML; //gets active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active == "Player 1") {//check which player is active
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar; //return back to correct avatar
}

//this function changes active player over to the other
function avatarPlaced() {
    var parseText = document.getElementById('gameMsg').innerHTML;
    var showPlayer = document.getElementById('showPlayer'); //select curent element
    //check if ther is already a winner, if yes, don't continue the game
    if (parseText == "Thats three in a row, Player 1 wins!" || parseText == "Thats three in a row, Player 2 wins!"){
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color='red';
    }
    activePlayer = showPlayer.innerHTML; //get curent player from element
    if (activePlayer == "Player 1") {//once active player selects square change active player
        showPlayer.innerHTML = "Player 2";
    } else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie(); //call to inquire if cats game
}

//this function gets array of current board and move validity
function check(info,square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0); //comparing index of squares
        if (tempInfo == square) {
            return tempInfo;
        }
    }
}


//as squares are selected they check to see if its already been assigned
//if not, record new square with assigned avatar
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById('boardState').innerHTML; //retreive boardState array
    var info = boardState.split(','); //separate teh string by commas to create an array
    verdict = check(info,square); // call function to check if square is occupied
    return verdict;
}

//get list of previous moves, concatenate current move to list of moves
function recordMove(currentMove) {
    var target = document.getElementById('boardState');
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves+currentMove;
}

function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById('boardState');
    var info = target.innerHTML; //raw array with squares and avatars
    info = info.substring(1); //remove leading comma
    info = info.split(','); //separate string by commas into array
    info.sort(); //sort square array in order despice gameplay sequence
    for (var i in info) {
        squareArray.push(info[i].charAt(0));  //new array wiht only squares no avatars
    }
    //call this array of funcitons to check for possible win 
    checkWinCon1(info,squareArray);
    checkWinCon2(info,squareArray);
    checkWinCon3(info,squareArray);
    checkWinCon4(info,squareArray);
    checkWinCon5(info,squareArray);
    checkWinCon6(info,squareArray);
    checkWinCon7(info,squareArray);
    checkWinCon8(info,squareArray);
   //console.log("New CHECK: "+document.getElementById('gameMsg').innerHTML);
	check4Tie();
}

//call this fuction to check board state for any ties
function check4Tie() {
    var boardState = document.getElementById('boardState').innerHTML;
    boardState = boardState.substring(1); //remove leading comma
    boardState = boardState.split(','); //separate string by commas into an array
    var check = document.getElementById('gameMsg').innerHTML;
    if(boardState.length >= 9 && check != "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "Oh no! Nobody wins, tie game!";
        tieSound(); //play sound when tie detected
        writeMsg(txt1);
        setTimeout(function() {stopGame();}, 3000);
    }
}

//whenever a win is detected the corresponding function will call this to produce winning process
function winner(winDetected,winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById('showPlayer').innerHTML;
        var txt2 = "Thats three in a row, "+activePlayer+" wins!";
        writeMsg(txt2);
        var btn = document.getElementById('btnStart');
        startEnabled(btn); //enable the start button
        var btn = document.getElementById('btnStop');
        btnDisabled(btn); // disable the stop button
        document.getElementById('showPlayer').innerHTML = "Game Stopped";
        glowBoard(winCon);// call funtion to make the game board pulse with colors
    }
}

//this function will make winning squaress light up
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName('square')
    for (var i=0;i<squares.length;i++){
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 179, 66)';}, 100);
            setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 238, 66)';}, 200);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(122, 244, 66)';}, 400);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(66, 244, 235)';}, 500);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 179, 66)';}, 600);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 238, 66)';}, 700);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(122, 244, 66)';}, 900);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(66, 244, 235)';}, 1000);
			setTimeout(function() {bg1.style.backgroundColor = '#d7f3f7';}, 1100);
        } else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function() {bg2.style.backgroundColor = 'rgb(66, 244, 235)';}, 100);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(122, 244, 66)';}, 200);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 238, 66)';}, 400);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 179, 66)';}, 500);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(66, 244, 235)';}, 600);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(122, 244, 66)';}, 700);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 238, 66)';}, 900);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 179, 66)';}, 1000);
			setTimeout(function() {bg2.style.backgroundColor = '#d7f3f7';}, 1100);
		} else if (i == index2) {
			var bg3 = squares[i];
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 179, 66)';}, 100);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 238, 66)';}, 200);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(122, 244, 66)';}, 400);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(66, 244, 235)';}, 500);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 179, 66)';}, 600);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 238, 66)';}, 700);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(122, 244, 66)';}, 900);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(66, 244, 235)';}, 1000);
			setTimeout(function() {bg3.style.backgroundColor = '#d7f3f7';}, 1100);
        }
    }
    setTimeout(function() {stopGame();}, 1200);
}

//these functions will produce game sounds depending on the occasion
function squareSound() {
    var sound = document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function() {sound.pause();}, 400);
    setTimeout(function() {sound.currentTime = 0;}, 500);
}
function tieSound() {
    var sound = document.getElementById("tieGame");
    var check = document.getElementById('gameMsg').innerHTML;
    setTimeout(function() {sound.play();}, 500);    
}
function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function() {sound.play();}, 500);
    setTimeout(function() {sound.pause();}, 2700); //add delay to keep sound short
    setTimeout(function() {sound.currentTime = 0;}, 2800);
}
function diceRoll() {
    var sound = document.getElementById("diceRoll");
    sound.play();
}

//call function to make background flash for a few seconds on win
function blink() {
    var body = document.getElementById('body');
    setTimeout(function() {body.style.backgroundColor = '#94f7ed';}, 100);
	setTimeout(function() {body.style.backgroundColor = '#94cef7';}, 200);
	setTimeout(function() {body.style.backgroundColor = '#94a6f7';}, 300);
	setTimeout(function() {body.style.backgroundColor = '#b094f7';}, 400);
	setTimeout(function() {body.style.backgroundColor = '#cc94f7';}, 500);
	setTimeout(function() {body.style.backgroundColor = '#e894f7';}, 600);
	setTimeout(function() {body.style.backgroundColor = '#f794d9';}, 700);
	setTimeout(function() {body.style.backgroundColor = '#f73881';}, 800);
	setTimeout(function() {body.style.backgroundColor = '#c6034e';}, 900);
	setTimeout(function() {body.style.backgroundColor = '#e00202';}, 1000);
	setTimeout(function() {body.style.backgroundColor = '#ffffff';}, 1100);
}

//------------------
//funtions for algorighms to find win conditions
//------------------------
//checking for wincon squares 012
function checkWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon1 = [0,1,2];
    //iterate through growing array during gametime
    //searching for existence of index 0, index 1, index 2
    //once they appear in array, record avatars and compare 3 for win cons
    for (var i in info) {
        if (info [i].charAt(0) == "0") {
            var match0Avatar = info [i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will trigger only if ther was a match for index0, index1, index2
    if (match0Avatar != undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win"; //this flag will pass when win is detected
            winner(winDetected,winCon1);
            return;
        }
    }
    winner(winDetected, winCon1); //wincon1 is the array of win combo   
}

//checking for wincon squares 345
function checkWinCon2(info,squareArray) {
    var winCon2 = [3,4,5];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[i].charAt(1); // only records avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[i].charAt(1);
        }
    }
    if (match3Avatar != undefined && match4Avatar != undefined && match5Avatar != undefined) {//this tirggers if match for 3.4.5.
        if (match3Avatar ==  match4Avatar && match3Avatar == match5Avatar) {
            winDetected = "win";
        }
    }
    winner(winDetected,winCon2);
}

//check for wincon squares 678
function checkWinCon3(info,squareArray) {
    var winCon2 = [6,7,8];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "6") {
			var match6Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "7") {
			var match7Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1);
        }
    }
    if (match6Avatar != undefined && match7Avatar != undefined && match8Avatar != undefined) {
		if (match6Avatar == match7Avatar && match6Avatar == match8Avatar) {
			winDetected = "win";
        }
    }
    winner(winDetected.winCon3);
}

//checking for wincon squares 036
function checkWinCon4(info,squareArray) {
	var winCon4 = [0,3,6];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "0") {
			var match0Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "3") {
			var match3Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "6") {
			var match6Avatar = info[i].charAt(1);
		}
	}
	if (match0Avatar != undefined && match3Avatar != undefined && match6Avatar != undefined) {
		if (match0Avatar == match3Avatar && match0Avatar == match6Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon4);
}

// checking for wincon squares 147
function checkWinCon5(info,squareArray) {
	var winCon5 = [1,4,7];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "1") {
			var match1Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "7") {
			var match7Avatar = info[i].charAt(1);
		}
	}
	if (match1Avatar != undefined && match4Avatar != undefined && match7Avatar != undefined) {
		if (match1Avatar == match4Avatar && match1Avatar == match7Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon5);
}

// checking for wincon squares 258
function checkWinCon6(info,squareArray) {
	var winCon6 = [2,5,8];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "2") {
			var match2Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "5") {
			var match5Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "8") {
			var match8Avatar = info[i].charAt(1);
		}
	}
	if (match2Avatar != undefined && match5Avatar != undefined && match8Avatar != undefined) {
		if (match2Avatar == match5Avatar && match2Avatar == match8Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon6);
}

// checking for wincon squares 642
function checkWinCon7(info,squareArray) {
	var winCon7 = [6,4,2];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "6") {
			var match6Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "2") {
			var match2Avatar = info[i].charAt(1);
		}
	}
	if (match6Avatar != undefined && match4Avatar != undefined && match2Avatar != undefined) {
		if (match6Avatar == match4Avatar && match6Avatar == match2Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon7);
}

// checking for wincon squares 048
function checkWinCon8(info,squareArray) {
	var winCon8 = [0,4,8];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "0") {
			var match0Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "8") {
			var match8Avatar = info[i].charAt(1);
		}
	}
	if (match0Avatar != undefined && match4Avatar != undefined && match8Avatar != undefined) {
		if (match0Avatar == match4Avatar && match0Avatar == match8Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon8);
}

//--------------------------------
//these funcitons are for each click event
//------------------------------------
function square1Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "0"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[0]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square2Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "1"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[1]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square3Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "2"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[2]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square4Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "3"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[3]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square5Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "4"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[4]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square6Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "5"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[5]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square7Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "6"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[6]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square8Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "7"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[7]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}
function square9Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") { //prevents avatar placement if game is stopped
        var square = "8"; //identify square selected, check if valid
       var verdict = recordMoves(square);
       if (verdict == undefined) { //verdict = empty, square open
            var paintAvatar = determineAvatar(); //gets correct avatar for player
            var selected = document.getElementsByClassName(paintAvatar)[8]; //paint avatar
            if (paintAvatar == "O") { 
                animateO(selected); //animate O
            } else if (paintAvatar == "X") {
                animateX(selected); //animate X
            }
            //build new array adding selected square and assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //check if current move wins
            avatarPlaced(square,paintAvatar);//end turn pass to next player
            squareSound(); //play game sound
        }
    }
}

//this function will perform the amination for O avatar
function animateO(selected) {
    selected.style.transform = (selected.style.transmform == "translateY(0%)" || null) ? "translateY(0%)" : "translateY(0%)";
}

//this function performs the animation for X avatar
function animateX(selected) {
	selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translateY(0%)" : "translateY(-100%)";
}