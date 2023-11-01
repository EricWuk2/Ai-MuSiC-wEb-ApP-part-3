

song1 = "";
song2 = "";
LEFTWX = 0;
RIGHTWX = 0;
LEFTWY = 0;
RIGHTWY = 0;

 function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }

 function setup(){
    Canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function modelLoaded()
{
   console.log("posenet is loaded -ish");
}

function gotPoses(){
   if(result,length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
   }
}
 function draw() {
    image(video, 0, 0, 600, 500);
 }