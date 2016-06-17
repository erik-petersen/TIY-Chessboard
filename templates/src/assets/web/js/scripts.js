$( function() {
  "use strict";

  // grabbing the 8 rows and storing each row in an array
  var row1 = $( ".row1 li" );
  var row2 = $( ".row-2 li" );
  var row3 = $( ".row-3 li" );
  var row4 = $( ".row-4 li" );
  var row5 = $( ".row-5 li" );
  var row6 = $( ".row-6 li" );
  var row7 = $( ".row-7 li" );
  var row8 = $( ".row-8 li" );

  // storing the 8 row arrays in a big array
  var chessBoard = [ row1, row2, row3, row4, row5, row6, row7, row8 ];
  // console.log( chessBoard[6][3] );

  /*
    storing the 9 moves of the Catalan Opening.  Piece is where is is and destination1
    is where it is going
  */
  var piece1 = chessBoard[6][3];
  var destination1 = chessBoard[4][3];
  var piece2 = chessBoard[0][6];
  var destination2 = chessBoard[2][5];
  var piece3 = chessBoard[6][2];
  var destination3 = chessBoard[4][2];
  var piece4 = chessBoard[1][4];
  var destination4 = chessBoard[2][4];
  var piece5 = chessBoard[6][6];
  var destination5 = chessBoard[5][6];
  var piece6 = chessBoard[1][3];
  var destination6 = chessBoard[3][3];
  var piece7 = chessBoard[7][5];
  var destination7 = chessBoard[6][6];
  var piece8 = chessBoard[0][5];
  var destination8 = chessBoard[1][4];

  var forwardClicks = 0; // variable to hold how many forward clicks have been made

  /***********************************************************
  FUNCTIONS
  ***********************************************************/
  // This function contains the original code I was using
  // function move1( display1, empty1 ) {
  //   console.log( "Before: " + chessBoard[6][3].textContent );
  //   console.log( "Before: " + chessBoard[4][3].textContent );
  //   console.log( $(display1).children().html() );
  //   $( empty1 ).append( $(display1).html() );
  //   $( display1 ).html( "" );
  //
  //   console.log( "After: " + chessBoard[6][3].textContent );
  //   console.log( "After: " + chessBoard[4][3].textContent );
  // }

  /*
    this function is used to make the moves, swapping values of piece and destination.
    this is used in the switch below
  */
  function move( piece, destination ) {
    $( destination ).append( $( piece ).html() );
    $( piece ).html( "" );
  }

  /***********************************************************
  CLICK EVENT FOR STEP FORWARD BUTTON
  ***********************************************************/
  $( ".step-forward" ).on( "click", function() {

    // when forward button is clicked, increase the counter by 1
    forwardClicks++;

    console.log( forwardClicks );

    // match the number of clicks to the appropriate case
    switch ( forwardClicks ) {
      case 1:
        move( piece1, destination1 );
        console.log( destination1 );
        break;
      case 2:
        // DOES NOT WORK AT THE MOMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // move( piece2, destination2 );
        var display = chessBoard[0][6];
        console.log( $(display).children().html() );
        $(chessBoard[2][5]).append( $(display).html() );
        $(chessBoard[0][6]).html( "" );
        break;
      case 3:
        move( piece3, destination3 );
        break;
      case 4:
        move( piece4, destination4 );
        break;
      case 5:
        move( piece5, destination5 );
        break;
      case 6:
        move( piece6, destination6 );
        break;
      case 7:
        move( piece7, destination7 );
        break;
      case 8:
        // DOES NOT WORK AT THE MOMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // move( display8, empty8 );
        var piece = chessBoard[0][5];
        var destination = chessBoard[1][4];
        console.log( $(piece).children().html() );
        $(chessBoard[1][4]).append( $(piece).html() );
        $(chessBoard[0][5]).html( "" );
        break;
      case 9:
        var piece = chessBoard[7][6];
        var destination = chessBoard[5][5];
        console.log( $(piece).children().html() );
        $(chessBoard[5][5]).append( $(piece).html() );
        $(chessBoard[7][6]).html( "" );
        break;
      default:
        break;
    }
  }); // end click step-forward

  /***********************************************************
  CLICK EVENT FOR STEP BACKWARD BUTTON
  ***********************************************************/
  // So, if I click back button, I want to decrease the forwardClicks by 1.
  // I also want to take the two variables and swap them

  $( ".step-backward" ).on( "click", function() {

    // match the number of clicks to the appropriate case...at the end, decrease forwardClicks
    switch ( forwardClicks ) {
      case 1:
        console.log( "Before: " + chessBoard[6][3].textContent );
        console.log( "Before: " + chessBoard[4][3].textContent );

        var display = chessBoard[4][3];
        console.log( $(display).children().html() );
        $(chessBoard[6][3]).append( $(display).html() );
        $(chessBoard[4][3]).html( "" );

        console.log( "After: " + chessBoard[6][3].textContent );
        console.log( "After: " + chessBoard[4][3].textContent );
        break;
      case 2:
        var display = chessBoard[2][5];
        console.log( $(display).children().html() );
        $(chessBoard[0][6]).append( $(display).html() );
        $(chessBoard[2][5]).html( "" );
        break;
      case 3:
        var display = chessBoard[4][2];
        console.log( $(display).children().html() );
        $(chessBoard[6][2]).append( $(display).html() );
        $(chessBoard[4][2]).html( "" );
        break;
      case 4:
        var display = chessBoard[2][4];
        console.log( $(display).children().html() );
        $(chessBoard[1][4]).append( $(display).html() );
        $(chessBoard[2][4]).html( "" );
        break;
      case 5:
        var display = chessBoard[5][6];
        console.log( $(display).children().html() );
        $(chessBoard[6][6]).append( $(display).html() );
        $(chessBoard[5][6]).html( "" );
        break;
      case 6:
        var display = chessBoard[3][3];
        console.log( $(display).children().html() );
        $(chessBoard[1][3]).append( $(display).html() );
        $(chessBoard[3][3]).html( "" );
        break;
      case 7:
        var display = chessBoard[6][6];
        console.log( $(display).children().html() );
        $(chessBoard[7][5]).append( $(display).html() );
        $(chessBoard[6][6]).html( "" );
        break;
      case 8:
        var display = chessBoard[1][4];
        console.log( $(display).children().html() );
        $(chessBoard[0][5]).append( $(display).html() );
        $(chessBoard[1][4]).html( "" );
        break;
      case 9:
        var display = chessBoard[5][5];
        console.log( $(display).children().html() );
        $(chessBoard[7][6]).append( $(display).html() );
        $(chessBoard[5][5]).html( "" );
        break;
      default:
        break;
    }

    forwardClicks--;
  }); // end click step-forward

  /*
    this should work but doesn't like everything else in this project

    console.log( "Clicks" + forwardClicks );
    var tempDisplay = "display" + forwardClicks;
    var tempEmpty = "empty" + forwardClicks;
    console.log( tempDisplay );
    console.log( functionString );

    function reverse() {
      var temp = tempDisplay;
      var functionString = "move" + forwardClicks;
      tempDisplay = tempEmpty;
      tempEmpty = temp;
      // move[forwardClicks]( tempDisplay, tempEmpty);
    } // end reverse()

    // do this at the end of this click event
    reverse();
    forwardClicks--;
    console.log( "Clicks" + forwardClicks );
  */

  // $( "main" ).on( "click" ) ...we'll do this once I have mvp
}); // end outer page function
