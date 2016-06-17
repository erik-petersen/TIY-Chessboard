$( function() {
  "use strict";

  var row1 = $( ".row-1 li" );
  var row2 = $( ".row-2 li" );
  var row3 = $( ".row-3 li" );
  var row4 = $( ".row-4 li" );
  var row5 = $( ".row-5 li" );
  var row6 = $( ".row-6 li" );
  var row7 = $( ".row-7 li" );
  var row8 = $( ".row-8 li" );

  var chessBoard = [ row1, row2, row3, row4, row5, row6, row7, row8 ];
  // console.log( chessBoard[6][3] );

  var forwardClicks = 0;
  $( ".step-forward" ).on( "click", function() {

    forwardClicks++;
    console.log( forwardClicks );

    switch ( forwardClicks ) {
      case 1:
        console.log( "Before: " + chessBoard[6][3].textContent );
        console.log( "Before: " + chessBoard[4][3].textContent );

        var display = chessBoard[6][3];
        console.log( $(display).children().html() );
        $(chessBoard[4][3]).append( $(display).html() );
        $(chessBoard[6][3]).html( "" );

        console.log( "After: " + chessBoard[6][3].textContent );
        console.log( "After: " + chessBoard[4][3].textContent );
        break;
      case 2:
        var display = chessBoard[0][6];
        console.log( $(display).children().html() );
        $(chessBoard[2][5]).append( $(display).html() );
        $(chessBoard[0][6]).html( "" );
        break;
      case 3:
        var display = chessBoard[6][2];
        console.log( $(display).children().html() );
        $(chessBoard[4][2]).append( $(display).html() );
        $(chessBoard[6][2]).html( "" );
        break;
      case 4:
        var display = chessBoard[1][4];
        console.log( $(display).children().html() );
        $(chessBoard[2][4]).append( $(display).html() );
        $(chessBoard[1][4]).html( "" );
        break;
      case 5:
        var display = chessBoard[6][6];
        console.log( $(display).children().html() );
        $(chessBoard[5][6]).append( $(display).html() );
        $(chessBoard[6][6]).html( "" );
        break;
      case 6:
        var display = chessBoard[1][3];
        console.log( $(display).children().html() );
        $(chessBoard[3][3]).append( $(display).html() );
        $(chessBoard[1][3]).html( "" );
        break;
      case 7:
        var display = chessBoard[7][5];
        console.log( $(display).children().html() );
        $(chessBoard[6][6]).append( $(display).html() );
        $(chessBoard[7][5]).html( "" );
        break;
      case 8:
        var display = chessBoard[0][5];
        console.log( $(display).children().html() );
        $(chessBoard[1][4]).append( $(display).html() );
        $(chessBoard[0][5]).html( "" );
        break;
      case 9:
        var display = chessBoard[7][6];
        console.log( $(display).children().html() );
        $(chessBoard[5][5]).append( $(display).html() );
        $(chessBoard[7][6]).html( "" );
        break;
      default:
        break;
    }
  }); // end click step-forward

  // $( "main" ).on( "click" ) ...we'll do this once I have mvp
}); // end outer page function
