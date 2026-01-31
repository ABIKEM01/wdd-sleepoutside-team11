/* eslint-disable quotes */
const form = document.getElementById("register-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const avatarFile = document.getElementById("avatar").files[0];

  let avatarBase64 = "";

  if (avatarFile) {
    avatarBase64 = await toBase64(avatarFile);
  }

  const newUser = {
    name,
    address,
    email,
    avatar: avatarBase64
  };

  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) throw new Error("Failed to create user");

    // const data = await response.json();
    // console.log("User created:", data);

    successMessage.classList.add("show");
    form.reset();
  } catch (error) {
    alert("Error creating account. Try again.");
    // console.error(error);
  }
});

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
