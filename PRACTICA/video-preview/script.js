console.log("page loaded...");

const videoContainer = document.getElementById('videoContainer');
const myVideo = document.getElementById('myVideo');
const videoPreview = document.getElementById('videoPreview');

videoContainer.addEventListener('mouseover', () => {
    videoPreview.style.display = 'block';
    myVideo.play();
});

videoContainer.addEventListener('mouseout', () => {
    videoPreview.style.display = 'none';
    myVideo.pause();
    myVideo.currentTime = 0;
})