
const cards = [
  {
    image: "/images/Gallery/Comfortable living.jpg",
    title: "Comfortable Living",
    description: "Enjoy a peaceful and comfortable environment designed for seniors.",
    link: "#"
  },
  {
    image: "/images/Gallery/Medical care 24x7.jpg",
    title: "24/7 Medical Care",
    description: "Professional healthcare support available at all times.",
    link: "#"
  },
  {
    image: "/images/Gallery/PXL_321.jpg",
    title: "Healthy Meals",
    description: "Nutritious and delicious meals prepared with care.",
    link: "#"
  }
];

const container = document.getElementById("cardContainer");

cards.forEach(card => {
  const cardHTML = `
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${card.title}</h3>
        <p class="text-gray-600 mb-4">${card.description}</p>
        <a href="${card.link}" class="text-blue-600 hover:underline">Learn More →</a>
      </div>
    </div>
  `;
  container.innerHTML += cardHTML;
});
