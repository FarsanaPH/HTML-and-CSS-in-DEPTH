// canvas tag of media elements connected to this page
let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = 0;
let radius = 40;

// to move ball across screen and change its drc to left and right
function moveBall(){
    if(position + radius > 640){
        moveSpeed = -speed;
    }else if(position - radius < 0){
        moveSpeed = speed;
    }
    position += moveSpeed;
}

// clears canvas area using context.clear nd set in its current position using beginpath,arc,fill functions
function drawball(){
    context.clearRect(0,0,640,480);

    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2*Math.PI);
    context.fill();
}

function animate(){
    moveBall();
    drawball();
    // call animate fnc to schedule animate fnc to be called again
    window.requestAnimationFrame(animate);
}

// call to start the animation fnc  
window.requestAnimationFrame(animate);