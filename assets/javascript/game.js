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
var gemNameGreen = ["Terra" , "Nature" , "Yggdrasil" , "the Nature" , "Fortitude" , "Earth" , "Leaf"]
var gemNameRed = ["Flame" , "Ember" , "Amaterasu" , "the Sun" , "Blaze" , "Inferno" , "Burn"]
var gemNameYellow = ["Gust" , "Freedom" , "Zephyr" , "the Wind" , "Speed" , "Jupiter" , "Pierce"]
var gemNameBlue = ["Ice" , "Healing" , "Neptune" , "the Atlantis" , "Wave" , "Atlantis" , "Ocean"]

// function that generates the random numbers for the round, includes the random gem numbers too!////

var isCrateOpen1 = false ;
function crateSound1() {
    if (isCrateOpen1 === false) {
        $('audio#open')[0].play();
    }
    else {$('audio#click')[0].play();}

}

var isCrateOpen2 = false ;
function crateSound2() {
    if (isCrateOpen2 === false) {
        $('audio#open')[0].play();
    }
    else {$('audio#click')[0].play();}

}

var isCrateOpen3 = false ;
function crateSound3() {
    if (isCrateOpen3 === false) {
        $('audio#open')[0].play();
    }
    else {$('audio#click')[0].play();}

}

var isCrateOpen4 = false ;
function crateSound4() {
    if (isCrateOpen4 === false) {
        $('audio#open')[0].play();
    }
    else {$('audio#click')[0].play();}

}



function generateRandoms (){
    var min = 30;
    var max = 100;
 
    //main variable to compare this at 
    randomToBeat = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("randomNumber " + randomToBeat);
    $("#numToBeat").text(randomToBeat);
    
    //green gem give out a bad range but give total of high score
    randomGem1 = Math.floor(Math.random() * 10) + 1;
    console.log("Gem1 " + randomGem1);

    //red gem gives out high range ,and moderate score
    var min2 = 20;
    var max2 = 50;
    randomGem2 = Math.floor(Math.random() * (max2 - min2 + 1) + 1);
    console.log("Gem2 " + randomGem2);

    var min3 = 2;
    var max3 = 50;
    randomGem3 = Math.floor(Math.random() * (max3 - min3 + 1) + 2);
    console.log("Gem3 " + randomGem3);
    var min4 = 5;
    var max4 = 30;
    //yellow gem give different scores everytime , but highest score ever
    randomGem4 = Math.floor(Math.random() * (max4 - min4 + 1) + 1);
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
    isCrateOpen1 = false;
    isCrateOpen2 = false;
    isCrateOpen3 = false;
    isCrateOpen4 = false;
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
    crateSound1();
    isCrateOpen1 = true;
    currentCollect+=randomGem1;
    $("#chest1").attr("src","assets/images/crys1.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys1.gif">');
    $("#gemName1").text(gemNameGreen[randomNamer])
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
    crateSound2();
    isCrateOpen2 = true;
    $("#gemName2").text(gemNameRed[randomNamer])
    $("#gemValue2").text(randomGem2);
    $("#currentCollect").text(currentCollect)
    $("#chest2").attr("src","assets/images/crys2.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys2.gif">');
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

  $( "#crystalBlue" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem3;
    crateSound3();
    isCrateOpen3 = true;
    $("#gemValue3").text(randomGem3);
    var min3 = 1;
    var max3 = 10;
    //yellow gem give different scores everytime , but highest score ever
    randomGem3 = Math.floor(Math.random() * (max3 - min3 + 1) + 1);
    $("#gemName3").text(gemNameBlue[randomNamer])
    $("#currentCollect").text(currentCollect)
    $("#chest3").attr("src","assets/images/crys3.gif" );
    $( ".collection" ).append('<img class="theImg" src="assets/images/crys3.gif">');
    if (currentCollect > randomToBeat) {
        gameOver();
    }
    else  winChecker();
});

$( "#crystalYellow" ).click(function() {
    // alert( "The value is : " + randomGem1 );
    currentCollect+=randomGem4;
    crateSound4();
    isCrateOpen4 = true;
    var min4 = 10;
    var max4 = 30;
    //yellow gem give different scores everytime , but highest score ever
    randomGem4 = Math.floor(Math.random() * (max4 - min4 + 1) + 1);
    $("#gemName4").text(gemNameYellow[randomNamer])
    $("#gemValue4").text(randomGem4);
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

