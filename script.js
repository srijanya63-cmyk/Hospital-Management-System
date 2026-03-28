let doctors = [
  {
    id: 1,
    name: "Dr. Sharma",
    specialization: "Cardiologist",
    fees: 500,
    rating: 4.5,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Dr. Mehta",
    specialization: "Dentist",
    fees: 300,
    rating: 4.2,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Dr. Singh",
    specialization: "Neurologist",
    fees: 700,
    rating: 4.8,
    image: "https://via.placeholder.com/200",
  },
];

// Load doctors
function displayDoctors() {
  let container = document.getElementById("doctorContainer");
  container.innerHTML = "";

  doctors.forEach((doc) => {
    container.innerHTML += `
      <div class="card">
        <img src="${doc.image}">
        <h3>${doc.name}</h3>
        <p>${doc.specialization}</p>
        <p>₹${doc.fees}</p>
        <p>⭐ ${doc.rating}</p>
        <button onclick='addToCart(${JSON.stringify(doc)})'>Book</button>
      </div>
    `;
  });
}

// Cart system
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(doc) {
  cart.push(doc);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Appointments!");
}

// Navigate
function goToCart() {
  window.location.href = "cart.html";
}

displayDoctors();
