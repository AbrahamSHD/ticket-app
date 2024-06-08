

function connectToWebSockets() {

  const socket = new WebSocket( `ws://${ envs.PORT }/ws` );

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

