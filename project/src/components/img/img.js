(function($) {

  // keep image centered while filling its containing div

  $( function() {

    $( window ).on( 'resize', resize );

    $( '.ma-img-centered' ).on( 'load', resize );

    setTimeout(resize, 0);

    // set when switch to height is triggered
    // assumes starting off large enough & wide enough
    let minWidth = 0;

    function resize() {
      $( '.ma-img-centered' ).each( function() {
        let $img = $( this );
        let $container = $img.parent();

        let h1 = $img.height();
        let h2 = $container.height();
        let w1 = $img.width();
        let w2 = $container.width();

        // switch is triggered when image gets too short to fit, so make it full width so height fills

        if (h1 > h2 && w2 > minWidth || w1 < w2) {

          // move up so vertically centered

          $img.css( {
            'width': '100%',
            'height': 'auto',
            'margin-top': -(h1 - h2) / 2,
            'margin-left': 0
          } );

          // re-init in case started small
          minWidth = 0;

        }
        else {

          if (minWidth === 0) {
            minWidth = w2;
          }

          // move left so horizontally centered

          $img.css( {
            'width': 'auto',
            'height': 'h2', // fill container
            'margin-left': -(w1 - w2) / 2,
            'margin-top': 0
          } );

        }


      } );
    }
  } );

}) (jQuery );
