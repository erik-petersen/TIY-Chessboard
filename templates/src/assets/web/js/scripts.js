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
  console.log( chessBoard[0][2] );

  var forwardClicks = 0;
  $( ".step-forward" ).on( "click", function() {

    forwardClicks++;
    console.log( forwardClicks );


    $( ".container" )
      .contents()
        .filter(function() {
          return this.nodeType === 3;
        })
          .wrap( "<p></p>" )
          .end()
        .filter( "br" )
        .remove();


    switch ( forwardClicks ) {
      case 1:
        console.log( "Before: " + chessBoard[6][3].textContent );
        console.log( "Before: " + chessBoard[4][3].textContent );

        var temp = chessBoard[4][3];
        chessBoard[4][3] = chessBoard[6][3];
        chessBoard[6][3] = temp;

        $( chessBoard[4][3] ).text( $(chessBoard[6][3]) );
        $( chessBoard[6][3] ).text( $(chessBoard[4][3]) );

        // $( chessBoard[4][3] ).append( $(chessBoard[6][3]) );
        // $( chessBoard[6][3] ).append( $(chessBoard[4][3]) );

        console.log( "After: " + chessBoard[6][3].textContent );
        console.log( "After: " + chessBoard[4][3].textContent );
        break;
      case 2:
        console.log( chessBoard[6][3].textContent );
        chessBoard[4][3].textContent = chessBoard[6][3].textContent;
        chessBoard[6][3] = "";
        break;
      default:
        break;
    }
  }); // end click step-forward

  // $( "main" ).on( "click" ) ...we'll do this once I have mvp
}); // end outer page function
