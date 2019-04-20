//psuedo code and stuff:
// generate a random number , looks like there aare 5 instances that we need a random number ,1. random number for the number that we need to compare at , 2 3 4 5 are for the assignment of the random number for all gems.DONNNEEEE

// show the random number on the html file , this random number will be called "numCompare"DOONNEE

// when there is an onclick event ,this pertains to the click of a gem , add that rumber to numCollect , 

// create a function that compares the on click , this would be our for loop of when a numCollect > numCompare , ++ a score for wins , else , ++ scores on loss 

//create global variable for the game , a var for the collected number.call it numCollect
var randomGem1 = 0;
var randomGem2 = 0;
var randomGem3 = 0;
var randomGem4 = 0;
var storeToBeat = 0;
var currentCollect = 0;
var wins = 0;
var loss = 0;
var randomToBeat =0 ;

// function that generates the random numbers for the round, includes the random gem numbers too!
function generateRandoms (){
    var min = 1;
    var max = 10;
    var min1= 1;
    var max1 = 100;
    randomToBeat = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("randomNumber " + randomToBeat);
    $("#numToBeat").text(randomToBeat);
    
    randomGem1 = Math.floor(Math.random() * (max1 - min1+ 1)) + min;
    console.log("Gem1 " + randomGem1);

    randomGem2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem2 " + randomGem2);

    randomGem3 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem3 " + randomGem3);

    randomGem4 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem4 " + randomGem4);
    $("#numToBeat").text(randomToBeat);
}

//run only once , sets the random numbers , to the respected gems and the number to beat
generateRandoms();

function displayVars() {
    $("#wins").text(wins);
    $("#loss").text(loss);
    $("#currentCollect").text(currentCollect)
}
displayVars();

/// onclick even for all the crystal colors 

$( "#crystalGreen" ).click(function() {
    alert( "GREEN" );
  });


$( "#crystalRed" ).click(function() {
    alert( "RED" );
  });

$( "#crystalBlue" ).click(function() {
    alert( "BLUE" );
  });


$( "#crystalYellow" ).click(function() {
    alert( "YELLOW" );
  });






















