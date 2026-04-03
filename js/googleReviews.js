 const testimonials = [
      {
        name: "Rohit Sharma",
        review: "Excellent care and very supportive staff. My father feels at home here.",
        rating: 5
      },
      {
        name: "Anita Verma",
        review: "Clean environment, professional nurses, and very caring management.",
        rating: 5
      },
      {
        name: "Suresh Gupta",
        review: "Highly recommended elder care service. Truly trustworthy and reliable.",
        rating: 5
      }
    ];

    const container = document.getElementById("testimonialContainer");

    function getStars(count) {
      return "⭐".repeat(count);
    }

    container.innerHTML = testimonials.map(item => `
      <div class="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        
        <!-- Stars -->
        <div class="text-yellow-500 text-sm">
          ${getStars(item.rating)}
        </div>

        <!-- Review -->
        <p class="mt-3 text-gray-600 text-sm leading-relaxed">
          "${item.review}"
        </p>

        <!-- Name -->
        <h4 class="mt-4 font-semibold text-gray-800">
          ${item.name}
        </h4>

      </div>
    `).join("");