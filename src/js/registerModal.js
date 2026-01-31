/* eslint-disable quotes */
// Check if user has seen the registration modal before
const hasSeenModal = localStorage.getItem("seen-register-modal");

// DOM elements
const modal = document.getElementById("register-modal");
const closeBtn = document.getElementById("close-modal");
const submitBtn = document.getElementById("register-submit");
const emailInput = document.getElementById("register-email");

// Show modal ONLY if first visit
if (!hasSeenModal) {
  modal.classList.remove("hidden");
}

// Close modal function
function closeModal() {
  modal.classList.add("hidden");
  localStorage.setItem("seen-register-modal", "true");
}

// Handle register button
submitBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email to register...");
    return;
  }


  alert("🎉 Thanks for registering! You are now entered in the giveaway!");

  closeModal();
});

// Handle "No Thanks"
closeBtn.addEventListener("click", closeModal);
