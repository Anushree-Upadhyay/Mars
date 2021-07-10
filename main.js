canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_img = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
img_n = Math.floor(Math.random()*5);
rwidth = 100;
rheight = 90;
rx = 10;
ry = 10;
bg = nasa_img[img_n];
ri = "rover.png.jpg";

function add()
{
    bgimgtag = new Image();
    bgimgtag.onload = uploadBackground;
    bgimgtag.src=bg;
    rimgtag = new Image();
    rimgtag.onload = uploadRover;
    rimgtag.src=ri;
}

function uploadBackground()
{
    ctx.drawImage(bgimgtag,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rimgtag,rx,ry,rwidth,rheight);  
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

if (keyPressed == "38")
{
    up();
    console.log("up");
}

if (keyPressed == "40")
{
    down();
    console.log("down");
}

if (keyPressed == "39")
{
    right();
    console.log("right");
}

if (keyPressed == "37")
{
    left();
    console.log("left");
}
}

function up()
{
    if (ry>=0)
    {
        ry = ry - 10;
        console.log("when up arrow is pressesd, x="+ rx + " y =" + ry);
        uploadBackground();
        uploadRover();
    }
}
function down()
{
    if (ry<=500)
    {
        ry = ry + 10
        console.log("when down arrow is pressesd, x="+ rx + " y =" + ry);
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if (rx<=700)
    {
        rx = rx + 10
        console.log("when right arrow is pressesd, x="+ rx + " y =" + ry);
        uploadBackground();
        uploadRover();
    }
}
function left()
{
    if (rx>=0)
    {
        rx = rx - 10
        console.log("when left arrow is pressesd, x="+ rx + " y =" + ry);
        uploadBackground();
        uploadRover();
    }
}