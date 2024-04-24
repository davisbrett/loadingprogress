document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    video.addEventListener('ended', function () {
        // Navigate to the next page when the video ends
        window.location.href = 'http://127.0.0.1:5500/3.html';
    });
});
