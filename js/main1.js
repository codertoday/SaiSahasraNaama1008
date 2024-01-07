const imgwrapper = document.querySelector('.img-wrapper');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let a=0;

prev.addEventListener("click", function(){

    a+=60;
    updatefun();

} );

next.addEventListener("click", function(){

    a-=60;
    updatefun();

} );


function updatefun(){
    imgwrapper.style.transform = `perspective(1000px)rotateY(${a}deg)`;

    setTimeout(()=>{
        a-=60;
        updatefun();
    },4000);
}

updatefun();
