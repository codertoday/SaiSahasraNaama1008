const imgwrapper = document.querySelector('.img-wrapper');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let a=0;

prev.addEventListener("click", function(){

    a+=45;
    updatefun();

} );

next.addEventListener("click", function(){

    a-=45;
    updatefun();

} );


function updatefun(){
    imgwrapper.style.transform = `perspective(1000px)rotateY(${a}deg)`;

    setTimeout(()=>{
        a-=45;
        updatefun();
    },4000);
}

updatefun();

var videoFrame = document.getElementById('videoFrame');

// Pause the video when the page loads
videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');