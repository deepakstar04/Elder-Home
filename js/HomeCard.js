const services = [
  {
    title: "24/7 Medical Care",
    desc: "Round-the-clock medical support for seniors. Our assisted living old age home provides trusted 24/7 medical care, ensuring seniors receive constant support, safety, and comfort. With trained caregivers and personalized attention, we create a secure and caring environment for a healthy and dignified life.",
    icon: "activity",
    color: "bg-blue-100 text-blue-600",
    link: "24/7-medical-care.html"
  },
  {
    title: "Personal Assistance",
    desc: "Daily help with dignity and respect. Our dedicated staff provides personalized assistance to ensure seniors maintain their independence and quality of life. From help with daily activities to companionship, we create a supportive environment where seniors can thrive with dignity and respect.",
    icon: "user",
    color: "bg-green-100 text-green-600",
    link: "personal-assistance.html"
  },
  {
    title: "Healthy Meals",
    desc: "Nutritious meals designed for elders. We provide a variety of delicious and nutritious meals tailored to meet the dietary needs of our senior residents, ensuring they receive the best possible nutrition for a healthy lifestyle.",
    icon: "coffee",
    color: "bg-yellow-100 text-yellow-600",
    link: "meals-nutrition.html"
  },
  {
    title: "Safe Environment",
    desc: "Secure and peaceful living space. Our assisted living old age home provides a safe and comfortable environment for seniors to live in, with 24/7 security and emergency support.",
    icon: "shield",
    color: "bg-purple-100 text-purple-600",
    link: "safe-environment.html"
  },
  {
    title: "Recreation",
    desc: "Activities for mental & physical wellness. Our assisted living old age home offers a variety of recreational activities designed to promote mental and physical wellness for our senior residents, fostering a vibrant and engaging community. ",
    icon: "smile",
    color: "bg-pink-100 text-pink-600",
    link: "recreation.html"
  },
  {
    title: "Emergency Support",
    desc: "Immediate response for emergencies. Our assisted living old age home provides 24/7 emergency support to ensure the safety and well-being of our senior residents at all times. With trained staff and quick response protocols, we are prepared to handle any emergency situation promptly and effectively.",
    icon: "alert-circle",
    color: "bg-red-100 text-red-600",
    link: "emergency.html"
  }
];

const container = document.getElementById("homecard");

container.innerHTML = services.map(service => `
  <a href="${service.link}" class="group">
    
    <div class="bg-white p-8 rounded-2xl shadow-md 
      hover:shadow-2xl hover:-translate-y-2 
      transition duration-300 text-center">

      <!-- Icon -->
      <div class="w-14 h-14 mx-auto flex items-center justify-center 
        rounded-full ${service.color} 
        group-hover:scale-110 transition">
        <i data-feather="${service.icon}"></i>
      </div>

      <!-- Title -->
      <h3 class="mt-5 text-xl font-semibold text-gray-800 
        group-hover:text-blue-600 transition">
        ${service.title}
      </h3>

      <!-- Description -->
      <p class="mt-3 text-gray-500 text-sm">
        ${service.desc}
      </p>

      <!-- Link -->
      <span class="inline-block mt-4 text-sm text-blue-600 font-medium 
        group-hover:underline">
        Learn More →
      </span>

    </div>

  </a>
`).join("");

feather.replace();