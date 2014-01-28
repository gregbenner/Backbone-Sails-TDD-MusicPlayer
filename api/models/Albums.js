/**
 * Albums
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	title: 'STRING',
    artist: 'STRING',
    tracks: 'ARRAY'
  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};


// "title":  "Album A",
//     "artist": "Artist A",
//     "tracks": [
//         {
//             "title": "Track A",
//             "url": "/music/Album A Track A.mp3"
//         },
//         {
//             "title": "Track B",
//             "url": "/music/Album A Track B.mp3"
//         }]
// }