const images = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

let currentIndex = 0;
      const imageDisplay = document.getElementById("imageDisplay");

      function updateImage(index) {
        imageDisplay.src = images[index];
      }

      document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage(currentIndex);
      });

      document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage(currentIndex);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        } else if (event.key === "ArrowRight") {
          currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        }
        updateImage(currentIndex);
      });