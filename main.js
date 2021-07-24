canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 30;
rover_height = 90;
rover_x = 200;
rover_y = 200;
background_image = "parking.jpg";
rover_image = "car1.png";
function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", keydown);
function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        upload_rover();
        
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}