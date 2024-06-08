

function connectToWebSockets() {

  const socket = new WebSocket( `${ envs.URL }` );

  socket.onmessage = ( event ) => {
    console.log(event.data);
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets();
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };

}

connectToWebSockets();

