function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_game_over = loadSound("gameover.wav")
	mario_kill = loadSound("kick.wav")
	mario_dead = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")

	video = createCapture(VIDEO)
	video.size(652,352)
	video.parent("game_console")

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose',gotPoses);


}

function modelLoaded(){

	console.log('Model is Loaded')
}

function gotPoses(results){


	if(results.length > 0){

		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;


	}
}

function draw() {
	game()
}










