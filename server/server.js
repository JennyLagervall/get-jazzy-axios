const express = require('express');

const app = express();
const PORT = 5001;

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));
app.use(express.json());

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
  res.send(songListArray);
});

app.post('/song',(req, res) => {
    console.log(req.body); //requesting body

if(req.body.title && req.body.artist){
    songListArray.push(req.body);
    res.sendStatus(201);
} else {
    res.status(400).send('song object does not have song and artist!');
}

})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
// [X] Look at the pattern for the working `/artist` server code & Axios request. 
// [X] Add the server side code to return all the song data when a GET request is made for `/song`. Test this is working with the browser.
// [X] Set up a client Axios request for `/song`, and display the song data on the DOM.
// [X] Add an HTML form for adding a new artist. Make a POST request to the server with artist information.
// [X]Add a server route that appends the artist to the array of artists on the server.--