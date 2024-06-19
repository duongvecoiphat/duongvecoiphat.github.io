window.addEventListener('load', function () {
    // Replace 'YOUR_LONG_VIDEO_ID' with your actual Google Drive video ID
    // var videoSrc = 'https://drive.google.com/uc?export=download&id=YOUR_LONG_VIDEO_ID';
    var videoSrc = 'https://drive.google.com/uc?export=download&id=1uzIMmor5rzPKfIaOxrhiFzD9P6PfaldH';
    var video = document.getElementById('video');
    video.src = videoSrc;
    video.play();
});