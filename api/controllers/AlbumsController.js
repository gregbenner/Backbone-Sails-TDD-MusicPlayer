/**
 * AlbumsController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {




    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to AlbumsController)
     */
    _config: {},

    index: function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(
            [{
                "title": "Bound - Zen Bound Ingame Music",
                "artist": "Ghost Monkey",
                "tracks": [{
                    "title": "Care",
                    "url": "/music/blue.mp3"
                }, {
                    "title": "Rope and Wood",
                    "url": "/music/jazz.mp3"
                }, {
                    "title": "Problem Solvent",
                    "url": "/music/minimalish.mp3"
                }, {
                    "title": "Unpaint My Skin",
                    "url": "/music/slower.mp3"
                }, {
                    "title": "Nostalgia",
                    "url": "/music/blue.mp3"
                }, {
                    "title": "Interludum",
                    "url": "/music/jazz.mp3"
                }, {
                    "title": "Grind",
                    "url": "/music/minimalish.mp3"
                }, {
                    "title": "Diagrams",
                    "url": "/music/slower.mp3"
                }, {
                    "title": "Hare",
                    "url": "/music/blue.mp3"
                }, {
                    "title": "Carefree",
                    "url": "/music/jazz.mp3"
                }, {
                    "title": "Tunnel At The End Of Light",
                    "url": "/music/minimalish.mp3"
                }]
            }, {
                "title": "Where the Earth Meets the Sky",
                "artist": "Tom Heasley",
                "tracks": [{
                    "title": "Ground Zero",
                    "url": "/music/blue.mp3"
                }, {
                    "title": "Western Sky",
                    "url": "/music/jazz.mp3"
                }, {
                    "title": "Monterey Bay",
                    "url": "/music/minimalish.mp3"
                }, {
                    "title": "Where the Earth Meets the Sky",
                    "url": "/music/slower.mp3"
                }]
            }]

        );

    }

};
