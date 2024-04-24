document.addEventListener('DOMContentLoaded', function () {
    // Get the play button and audio player
    var playButton = document.getElementById('playButton');
    var audioPlayer = document.getElementById('audioPlayer');

    // Add click event listener to the play button
    playButton.addEventListener('click', function () {
        // Check if audio is currently paused
        if (audioPlayer.paused) {
            // If paused, play the audio
            audioPlayer.play();
            playButton.style.display = 'none'; // Hide the play button

            // Start cycling through images and play video
            replaceImage(0);
            playVideo();
        }
    });
});

const imageUrls = [
    "diggs/1.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png",
    "diggs/6.png",
    "diggs/7.png",
    "diggs/8.png",
    "diggs/9.png",
    "diggs/10.png",
    "diggs/11.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png",
    "diggs/6.png",
    "diggs/7.png",
    "diggs/8.png",
    "diggs/9.png",
    "diggs/10.png",
    "diggs/11.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png",
    "diggs/6.png",
    "diggs/7.png",
    "diggs/8.png",
    "diggs/9.png",
    "diggs/10.png",
    "diggs/11.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png",
    "diggs/6.png",
    "diggs/7.png",
    "diggs/8.png",
    "diggs/9.png",
    "diggs/10.png",
    "diggs/11.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png",
    "diggs/6.png",
    "diggs/7.png",
    "diggs/8.png",
    "diggs/9.png",
    "diggs/10.png",
    "diggs/11.png",
    "diggs/1.png",
    "diggs/2.png",
    "diggs/3.png",
    "diggs/4.png",
    "diggs/5.png"
];

const imageDurations = [
    2376.408215,
    2233.760727,
    2092.977154,
    1954.929119,
    1820.419516,
    1690.165366,
    1564.784938,
    1444.789471,
    1330.579494,
    1222.445415,
    1120.571855,
    1025.044999,
    935.8622026,
    852.9430679,
    776.1412625,
    705.2564629,
    640.0459089,
    580.2351928,
    525.5280221,
    475.6148051,
    430.1799996,
    388.908233,
    351.4892568,
    317.6218299,
    287.016649,
    259.3984492,
    234.5074018,
    212.0999275,
    191.9490372,
    173.8442968,
    157.5915027,
    143.012142,
    129.9426978,
    118.2338497,
    107.7496122,
    98.36644033,
    89.9723301,
    82.46593132,
    75.75568699,
    69.75900933,
    64.40149885,
    59.61621062,
    55.34296973,
    51.52773644,
    48.12202032,
    45.08234214,
    42.36974117,
    39.94932574,
    37.7898643,
    35.86341421,
    34.14498558,
    32.6122373,
    31.24520278,
    30.02604262,
    28.93882212,
    27.96931114,
    27.10480432,
    26.33395977,
    25.64665437,
    25.0338541
];

function replaceImage(index) {
    const img = document.getElementById('mainImage');
    if (index < imageUrls.length) {
        img.src = imageUrls[index];
        const duration = imageDurations[index];
        setTimeout(() => {
            replaceImage(index + 1); // Move to the next image after the specified duration
        }, duration);
    } else {
        img.style.display = 'none'; // Hide image when cycling is done
        hideImage(); // Call the function to hide the image after cycling completes
        playVideo(); // Play video after image cycling completes
    }
}

function playVideo() {
    const video = document.getElementById('videoElement');
    video.play();
}

function hideImage() {
    const img = document.getElementById('mainImage');
    img.style.display = 'none';
}
