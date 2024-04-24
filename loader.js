document.addEventListener("DOMContentLoaded", function () {
    // Show spinner when the page starts loading
    document.getElementById("spinner").style.display = "block";

    // Function to hide spinner and start the rest of the content
    function startContent() {
        // Hide the spinner
        document.getElementById("spinner").style.display = "none";

        // Start the rest of your content here
        console.log("All content has finished loading");
    }

    // Check if all content (including images) has finished loading
    window.addEventListener("load", function () {
        // This event listener fires when all resources (including images) have loaded
        startContent();
    });

    // Fallback in case the 'load' event doesn't fire (e.g., for cached images)
    setTimeout(function () {
        startContent();
    }, 5000); // Adjust the timeout as needed
});
