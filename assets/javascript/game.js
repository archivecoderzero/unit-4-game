//psuedo code and stuff:
// generate a random number , looks like there aare 5 instances that we need a random number ,1. random number for the number that we need to compare at , 2 3 4 5 are for the assignment of the random number for all gems.DONNNEEEE

// show the random number on the html file , this random number will be called "numCompare"DOONNEE

// when there is an onclick event ,this pertains to the click of a gem , add that rumber to numCollect , 

// create a function that compares the on click , this would be our for loop of when a numCollect > numCompare , ++ a score for wins , else , ++ scores on loss 

//create global variable for the game , a var for the collected number.call it numCollect
var randomGem1 = 0 ;
var randomGem2 = 0 ;
var randomGem3 = 0 ;
var randomGem4 = 0 ;
var storeToBeat = 0;
var currentCollect =0;
var wins = 0;
var loss = 0;
var randomToBeat = 0;
var gemNameGreen = ["Terra" , "Nature" , "Yggrasil" , "the Nature" , "Fortitude" , "Earth" , "Leaf"]
var gemNameRed = ["Flame" , "Ember" , "Amaterasu" , "the Sun" , "Blaze" , "Inferno" , "Burn"]
var gemNameYellow = ["Gust" , "Freedom" , "Zephyr" , "the Wind" , "Speed" , "Jupiter" , "Pierce"]
var gemNameBlue = ["Ice" , "Healing" , "Neptune" , "the Atlantis" , "Wave" , "Atlantis" , "Ocean"]
var isCrateOpen = False;


// function that generates the random numbers for the round, includes the random gem numbers too!////

function crateSound() {}



function generateRandoms (){
    var min = 30;
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

    randomNamer = Math.floor(Math.random() * 7)

    

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
    $("#currentCollect").text(currentCollect)
    wins++;
    $("#wins").text(wins);
    setTimeout(alerter, 50);
    function alerter() {
        $('audio#win')[0].play();
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
    $("#gemValue1").text("?");
    $("#gemValue2").text("?");
    $("#gemValue3").text("?");
    $("#gemValue4").text("?");
    $("#gemName1").text("?")
    $("#gemName2").text("?")
    $("#gemName3").text("?")
    $("#gemName4").text("?")
    $( ".collection" ).html("");
}

//fucntion for losing , add some stats after
function gameOver() {
    $("#currentCollect").text(currentCollect)
    loss++;
    $("#loss").text(loss);
    setTimeout(alerter, 50);
    function alerter() {
        $('audio#loss')[0].play();
        alert("You Lost!");
        roundOver();
        resetImage();
};}

  




/// onclick even for all the crystal colors 

$( "#crystalGreen" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem1;
    $("#chest1").attr("src","assets/images/crys1.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys1.gif">');
    $("#gemName1").text(gemNameGreen[randomNamer])
    $('audio#click')[0].play();
    $("#gemValue1").text(randomGem1);
    $("#currentCollect").text(currentCollect);
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

  $( "#crystalRed" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem2;
    $("#gemName2").text(gemNameRed[randomNamer])
    $("#gemValue2").text(randomGem2);
    $("#currentCollect").text(currentCollect)
    $("#chest2").attr("src","assets/images/crys2.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys2.gif">');
    $('audio#click')[0].play();
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

  $( "#crystalBlue" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem3;
    $("#gemValue3").text(randomGem3);
    $("#gemName3").text(gemNameBlue[randomNamer])
    $("#currentCollect").text(currentCollect)
    $("#chest3").attr("src","assets/images/crys3.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys3.gif">');
    $('audio#click')[0].play();
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

$( "#crystalYellow" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem4;
    $("#gemName4").text(gemNameYellow[randomNamer])
    $("#gemValue4").text(randomGem4);
    $('audio#click')[0].play();
    $("#currentCollect").text(currentCollect)
    $("#chest4").attr("src","assets/images/crys4.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys4.gif">');
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});


//// start the game :

$( document ).ready(function() {
    console.log( "ALL SYSTEMS NOMINAL" );
    
    console.log("Random Number " + randomNamer );
});
generateRandoms();



// questions :

// create a span , (boot strap that will wrap around the card with the value of the gem , initial value is = " ??? "


///// ---->>> select the image , . addClass to the (border border-success)


// how to by-pass the display your number in a win lose condition , without useing the timer, i set up my function to display win number first before the alert "you lose or win " but it will still display the alert first , this leads to a bug that whem you press the button fast, it will execute the code as many times as you press it before te timer runs out...
 // ---- >>>> asynchronous , async ()


// using .one , i want the sound of the opening a crate to be resetted when the gameOver (reset) runs 

// ---- >>> make a variable ( isAcrate ) , if true =isAcrate , execute sound , if not ,not

// i want the sound to run simultenously , because when i play the sound , it waits for the sound of " click" before it plays the lose or win sound ..

// --

// randomize the positions

//  create an array ,called crtstal html


// ask about submiting early and pushing an update , way past the submition deadline , which version will be graded .

