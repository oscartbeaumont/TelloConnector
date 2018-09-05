// Deps
const url = require('url');

//Vars
var dataToTrack_keys = ["battery", "x", "y", "z", "speed"];

function respondToPoll(response, drone) {
    var noDataReceived = false;

    var resp = "";
    var i;
    for (i = 0; i < dataToTrack_keys.length; i++) {
        resp += dataToTrack_keys[i] + " ";
        resp += (i + 10);
        resp += "\n";
    }
    response.end(resp);
}

// The Web Handler Function
module.exports = (client) => {
    return (request, response) => {
        var pathname = url.parse(request.url).pathname;
        var url_params = request.url.split('/');
        if (url_params.length < 2)
            return;
        var command = url_params[1];

        switch (command) {
            case 'poll':
                respondToPoll(response);
                break;

            case 'takeoff':
                console.log('Scratch Command: Takeoff');
                drone.takeoff();
                break;

            case 'land':
                console.log('Scratch Command: Land');
                drone.land((err) => {
                  if (err) throw err;
                });
                break;

            case 'up':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Up ' + dis);
                drone.up(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'down':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Down ' + dis);
                drone.down(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'left':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Left ' + dis);
                drone.left(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'right':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Right ' + dis);
                drone.right(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'forward':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Foward ' + dis);
                drone.forward(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'back':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Back ' + dis);
                drone.back(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'cw':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: CW ' + dis);
                drone.cw(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'flip':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Flip ' + dis);
                drone.flip(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'ccw':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: CCW ' + dis);
                drone.ccw(dis, (err) => {
                  if (err) throw err;
                });
                break;

            case 'setspeed':
                dis = (url_params.length >= 3) ? url_params[2] : 0;
                console.log('Scratch Command: Set Speed ' + dis);
                drone.setSpeed(dis, (err) => {
                  if (err) throw err;
                });
                break;
        }
        response.end('Hello Tello.\n');
    }
}
