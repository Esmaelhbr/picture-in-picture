const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//async function select a media stream, pass to a video element then play

async function selectMediaStream(){
	try{
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		}
 

	}catch(err){
		//catch errors
		console.log(err);
	}
}

button.addEventListener('click', async () => {
  //disable the button
	button.disable = true;

	//start picture in picture
	await videoElement.requestPictureInPicture();
	//reset button
	button.disable = false;

});

//on load
selectMediaStream();