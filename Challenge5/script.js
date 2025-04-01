const images = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

let currentIndex = 0;
      const imageDisplay = document.getElementById("imageDisplay");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      function updateImage(index) {
        imageDisplay.src = images[index];
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
      }

      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateImage(currentIndex);
        }
      });

      nextBtn.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
          currentIndex++;
          updateImage(currentIndex);
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && currentIndex > 0) {
          currentIndex--;
        } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
          currentIndex++;
        }
        updateImage(currentIndex);
      });