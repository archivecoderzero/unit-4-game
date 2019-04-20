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
var currentCollect =0;
var wins = 0;
var loss = 0;
var randomToBeat =0;

// function that generates the random numbers for the round, includes the random gem numbers too!
function generateRandoms (){
    var min = 1;
    var max = 50;
    var min1= 1;
    var max1 = 20;
    //main variable to compare this at 
    randomToBeat = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("randomNumber " + randomToBeat);
    $("#numToBeat").text(randomToBeat);
    
    //green gem give out a bad range but give total of high score
    randomGem1 = Math.floor(Math.random() * (max1 - min1+ 1)) + min;
    console.log("Gem1 " + randomGem1);

    //red gem gives out moderate range ,and moderate score
    randomGem2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem2 " + randomGem2);

    //blue gem give good range but low score (1 to 2)
    randomGem3 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem3 " + randomGem3);

    //yellow gem give different scores everytime , but highest score ever
    randomGem4 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
    console.log("Gem4 " + randomGem4);
    $("#numToBeat").text(randomToBeat);
//remove this later
    alert ("Pick")
}

//run only once , sets the random numbers , to the respected gems and the number to beat
function displayVars() {
    $("#wins").text(wins);
    $("#loss").text(loss);
    $("#currentCollect").text(currentCollect)
}

function roundOver(){
    currentCollect = 0;
    displayVars();
    generateRandoms();

}


//function for winning
function winChecker() {
    if (currentCollect == randomToBeat)
    {
    $('audio#win')[0].play();
    $("#currentCollect").text(currentCollect)
    wins++;
    $("#wins").text(wins);
    setTimeout(alerter, 50);
    function alerter() {
        alert("you win");
        roundOver();
        resetImage();

};
    

}
}

function resetImage(){
    $("#chest1").attr("src","assets/images/chest.png" );
    $("#chest2").attr("src","assets/images/chest.png" );
    $("#chest3").attr("src","assets/images/chest.png" );
    $("#chest4").attr("src","assets/images/chest.png" );
}

//fucntion for losing , add some stats after
function gameOver() {
    $('audio#lose')[0].play();
    $("#currentCollect").text(currentCollect)
    loss++;
    $("#loss").text(loss);
    setTimeout(alerter, 50);
    function alerter() {
        alert("you loss");
        roundOver();
        resetImage();
    };
  
}



/// onclick even for all the crystal colors 

$( "#crystalGreen" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem1;
    $("#chest1").attr("src","assets/images/crys1.gif" );
    $("#currentCollect").text(currentCollect);
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

  $( "#crystalRed" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem2;
    $("#currentCollect").text(currentCollect)
    $("#chest2").attr("src","assets/images/crys2.gif" );

    $('audio#click')[0].play();
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

  $( "#crystalBlue" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem3;
    $("#currentCollect").text(currentCollect)
    $("#chest3").attr("src","assets/images/crys3.gif" );

    $('audio#click')[0].play();
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});


$( "#crystalYellow" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem4;
    $("#currentCollect").text(currentCollect)
    $("#chest4").attr("src","assets/images/crys4.gif" );

    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});


//// start the game :


generateRandoms();
displayVars();