$( function() {
  "use strict";

  // grabbing the 8 rows and storing each row in an array
  var row1 = $( ".row-1 li" );
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
  var piece1 = chessBoard[6][4];
  var destination1 = chessBoard[4][4];
  var piece2 = chessBoard[0][7];
  var destination2 = chessBoard[2][6];
  var piece3 = chessBoard[6][3];
  var destination3 = chessBoard[4][3];
  var piece4 = chessBoard[1][5];
  var destination4 = chessBoard[2][5];
  var piece5 = chessBoard[6][7];
  var destination5 = chessBoard[5][7];
  var piece6 = chessBoard[1][4];
  var destination6 = chessBoard[3][4];
  var piece7 = chessBoard[7][6];
  var destination7 = chessBoard[6][7];
  var piece8 = chessBoard[0][6];
  var destination8 = chessBoard[1][5];
  var piece9 = chessBoard[7][7];
  var destination9 = chessBoard[5][6];

  var forwardClicks = 0; // variable to hold how many forward clicks have been made

  /***********************************************************
  FUNCTIONS
  ***********************************************************/
  /*
    this function is used to make the moves, swapping values of piece and destination.
    this is used in the switch below
  */
  function move( piece, destination ) {
    console.log( "Piece: " + piece + "\nDestination: " + destination );
    $( destination ).append( $( piece ).html() );
    $( piece ).html( "" );
  }

  function moveBack( piece, destination ) {
    var reversedPiece = destination;
    var reversedDestination = piece;
    console.log( "Reversed Piece: " + reversedPiece + "\nReversed Destination: " + reversedDestination );
    $( reversedDestination ).append( $( reversedPiece ).html() );
    $( reversedPiece ).html( "" );
  }

  /***********************************************************
  CLICK EVENT FOR STEP FORWARD BUTTON
  ***********************************************************/
  $( ".step-forward" ).on( "click", function() {

    // when forward button is clicked, increase the counter by 1
    if( forwardClicks >= 9 ) {
      // forwardClicks = 9;
      $( ".step-forward" ).prop( "disabled", true );
    }

    else {
      forwardClicks++;
      // $( ".step-forward" ).disable( false );
    }

    console.log( forwardClicks );
    // forwardClicks++;

    // This should be all I need but, like the function for reverse, it isn't working
    // move( piece.concat(forwardClicks), destination.concat(forwardClicks) );

    // so I'm doing this wet switch...match the number of clicks to the appropriate case
    switch ( forwardClicks ) {
      case 1:
        move( piece1, destination1 );
        console.log( chessBoard[0][0] );
        break;
      case 2:
        move( piece2, destination2 );
        console.log( destination2 );
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
        move( piece8, destination8 );
        console.log( piece8, destination8 );
        break;
      case 9:
        move( piece9, destination9 );
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
        moveBack( piece1, destination1 );
        break;
      case 2:
        moveBack( piece2, destination2 );
        break;
      case 3:
        moveBack( piece3, destination3 );
        break;
      case 4:
        moveBack( piece4, destination4 );
        break;
      case 5:
        moveBack( piece5, destination5 );
        break;
      case 6:
        moveBack( piece6, destination6 );
        break;
      case 7:
        moveBack( piece7, destination7 );
        break;
      case 8:
        moveBack( piece8, destination8 );
        break;
      case 9:
        moveBack( piece9, destination9 );
        break;
      default:
        break;
    }

    if( forwardClicks < 0 ) {
      forwardClicks = 0;
    }

    else {
      forwardClicks--;
    }

  }); // end click step-forward

  /***********************************************************
  CLICK EVENT FOR PLAY BUTTON
  ***********************************************************/
  var counter = 1;

  $( ".play" ).on( "click", function() {

    $( ".play" ).hide( 500 );
    $( ".pause" ).show( 500 );

    setTimeout( function() {
      var interval = setInterval( function() {
      switch ( counter ) {
        case 1:
          move( piece1, destination1 );
          console.log( chessBoard[0][0] );
          break;
        case 2:
          move( piece2, destination2 );
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
          move( piece8, destination8 );
          break;
        case 9:
          move( piece9, destination9 );
          break;
        default:
          break;
      } // end switch

      $( ".pause" ).on( "click", function() {
        clearInterval( interval );
        $( ".pause" ).hide( 500 );
        $( ".play" ).show( 500 );
        // counter = counter;
      });

      counter++;
    }, 1000);
  }, 1000 ); //end setTimeout()
  }); // end click play

  /*
    this should work but doesn't at the moment

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
