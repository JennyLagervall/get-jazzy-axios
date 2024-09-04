function onReady() {
  console.log('Hello from client.js');
  fetchSongs();

  axios({
    method: 'GET',
    url: '/artist',
  })
    .then(function (response) {
      // Code that will run on successful response
      // from the server.
      console.log(response);
      // quotesFromServer will be an Array of quotes
      let quotesFromServer = response.data;
      let contentDiv = document.querySelector('#artistTableBody');
      for (let artist of quotesFromServer) {
        contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
      }
    })
    .catch(function (error) {
      // Code that will run on any errors from the server.
      console.log(error);
      alert('Something bad happened! Check the console for more details.');
    });
}

// TODO Add Axios request for /songs and display on DOM
function fetchSongs() {
  axios({
    method: 'GET',
    url: '/song',
  })
    .then(function (response) {
      console.log(response);
      let songFromServer = response.data;
      console.log('song', songFromServer);
      let songDiv = document.querySelector('#songTableBody');
      songDiv.innerHTML = '';
      for (let song of songFromServer) {
        songDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                    
                </tr>
            `;
      }
    })
    .catch(function (error) {
      // Code that will run on any errors from the server.
      console.log(error);
      alert('Something bad happened! Check the console for more details.');
    });
}

function addSong(event) {
  event.preventDefault();
  let title = document.getElementById('title-input').value;
  let artist = document.getElementById('artist-input').value;
  let newSong = { title, artist };
  console.log('newSong', newSong);

  axios({
    method: 'POST',
    url: '/song',
    data: newSong
  }).then(response => {
   fetchSongs(); 
    document.getElementById('title-input').value = '';
    document.getElementById('artist-input').value = '';
  }).catch(error => console.error('Something bad happened! Check the console for more details.'))
}
  

onReady();
