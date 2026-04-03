 const images = [
    "/images/Gallery/Best old age Home.jpg",
    "/images/Gallery/care home.jpg",
    "/images/Gallery/old age fast.jpg",
    "/images/Gallery/love one.jpg",
    "/images/Gallery/golden age.jpg",
  ];

  const slider = document.getElementById("gallerySlider");

  // Duplicate images for infinite effect
  const allImages = [...images, ...images];

  slider.innerHTML = allImages.map(img => `
    <div class="min-w-[250px] md:min-w-[300px]">
      <img src="${img}" 
        class="w-full h-[180px] md:h-[220px] object-cover rounded-xl"/>
    </div>
  `).join("");

  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 0.5;
    if (scrollAmount >= slider.scrollWidth / 2) {
      scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();