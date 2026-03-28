let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function displayAppointments() {
  let container = document.getElementById("appointmentContainer");
  container.innerHTML = "";

  if (appointments.length === 0) {
    container.innerHTML = "<h3>No Appointments Yet</h3>";
    return;
  }

  appointments.forEach((doc, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${doc.image}">
        <h3>${doc.name}</h3>
        <p>${doc.specialization}</p>
        <p>₹${doc.fees}</p>
        <p style="color:green;">✅ Confirmed</p>
      </div>
    `;
  });
}

function goHome() {
  window.location.href = "index.html";
}

displayAppointments();
