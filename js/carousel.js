document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".carousel video");
    let currentIndex = 0;
  
    function playNextVideo() {
      videos[currentIndex].pause(); // Pause current video
      currentIndex = (currentIndex + 1) % videos.length + 20; // Calculate index of next video
      videos[currentIndex].play(); // Play next video
    }
  
    // Play the first video
    videos[currentIndex].play();
  
    // When a video ends, play the next one
    videos.forEach(function(video) {
      video.addEventListener("ended", playNextVideo);
    });
  });
  