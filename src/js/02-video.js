import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// -----Init zero obj for future check -----
let parsedTimePlayVideoObj = 0;

// -----Player move-----
player.on('timeupdate', throttle(onPlay, 1000));

// -----Save current position in local storage-----
const timePlayVideoObj = localStorage.getItem("videoplayer-current-time");

// -----Checking valid-value obj in local storage-----
try {
    parsedTimePlayVideoObj = JSON.parse(timePlayVideoObj);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// -----Checking non-empty obj for replay palyer from curent position -----
if (parsedTimePlayVideoObj) {
    player.setCurrentTime(parsedTimePlayVideoObj.seconds)
}

// -----Function`s group-----
function onPlay(value) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(value))
};