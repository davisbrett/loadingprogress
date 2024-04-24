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
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png"
];

const imageDurations = [
    1089.9057340233563,
    1013.1530180346454,
    936.4003020459345,
    878.656211221215,
    804.912192396751,
    748.6077042928842,
    692.3032161890174,
    644.0052244838579,
    595.7072327786984,
    555.3847701184322,
    513.648756258966,
    479.5520365994151,
    443.55276541941505,
    411.36377856779144,
    383.2523846297872,
    357.3084961742219,
    331.3639432987901,
    309.43061182629817,
    286.69780156873587,
    266.66840877418493,
    248.944256972226,
    231.2201051702671,
    217.8468182193564,
    202.46848764605386,
    188.20012467337425,
    175.93376170069464,
    164.97943036102368,
    153.02509902135273,
    143.1309272553076,
    133.23675548910247,
    124.68523661718226,
    116.13371774526205,
    108.23898515032473,
    101.34225255338741,
    94.94031475550324,
    88.53837695661907,
    82.99019202529324,
    77.4420090939674,
    72.62783062792649,
    67.81365216188557,
    63.26346989379402,
    59.44528721770447,
    55.80102283332282,
    52.15775844894016,
    48.929364017783004,
    45.801970576625854,
    42.82790490424007,
    40.252649146856285,
    37.827944189513645,
    35.403239232171004,
    33.059649770651654,
    31.1620583091323,
    29.204959879661182,
    27.451861449190063,
    25.794768176416736,
    24.205674903142684,
    22.71639093495302,
    21.36510597176535,
    19.976416515049583,
    18.878727058334816,
    18.878727058334816
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
