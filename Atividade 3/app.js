let play = document.getElementById('play');
let pause = document.getElementById('pause');
let mute = document.getElementById('mute');
let rewind = document.getElementById('rewind');
let forward = document.getElementById('forward');
let fullscreen = document.getElementById('fullscreen');
let video = document.getElementById('video')
play.addEventListener('click', function(ev){
    ev.preventDefault();
    video.play();
})
pause.addEventListener('click', function(ev){
    ev.preventDefault();
    video.pause();
})
mute.addEventListener('click', function(ev){
    ev.preventDefault();
    video.muted = true
})
rewind.addEventListener('click', function(ev){
    ev.preventDefault();
    video.currentTime-= 2;
})
forward.addEventListener('click', function(ev){
    ev.preventDefault();
    video.currentTime += 2;
})
fullscreen.addEventListener('click', function(ev){
    ev.preventDefault();
    video.requestFullscreen();

})