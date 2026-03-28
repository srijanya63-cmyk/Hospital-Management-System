let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  let container = document.getElementById("cartContainer");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML =
      "<h3 style='text-align:center;'>No Appointments Added</h3>";
    return;
  }

  cart.forEach((doc, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${doc.image}">
        <h3>${doc.name}</h3>
        <p>${doc.specialization}</p>
        <p>₹${doc.fees}</p>
        <button onclick="removeItem(${index})">Remove ❌</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function confirmBooking() {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments = appointments.concat(cart);

  localStorage.setItem("appointments", JSON.stringify(appointments));
  localStorage.removeItem("cart");

  alert("Appointment Confirmed 🎉");

  window.location.reload();
}

function goHome() {
  window.location.href = "index.html";
}

displayCart();
