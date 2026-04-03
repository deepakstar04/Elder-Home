    // Image Array (Objects)
    const slides = [
      // { image: "/images/HomeBanner/Best Senior Care (5).png" },
      // { image: "/images/HomeBanner/Best Senior Care (6).png" },
      // { image: "/images/HomeBanner/Best Senior Care.png" },
      { image: "/images/HomeBanner/addmore.png" },
      { image: "/images/HomeBanner/Affordable.png" },
      { image: "/images/HomeBanner/medical.png" },

    ];

    const slider = document.getElementById("slider");
    let currentIndex = 0;

    // Render Slides
    slider.innerHTML = slides.map(slide => `
      <div class="min-w-full">
        <img src="${slide.image}" 
          class="w-full h-[30vh] md:h-[70vh] object-cover object-center"
          alt="banner"/>
      </div>
    `).join("");

    const totalSlides = slides.length;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Next Slide
    document.getElementById("next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });

    // Prev Slide
    document.getElementById("prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    // Auto Slide (Optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 3000);