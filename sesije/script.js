const form = document.querySelector("form");
const protected = document.getElementById("protected");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  cookieStore.set("session_token", data.token);

  console.log("Response from server:", data);
  if (response.ok) {
    console.log("Login successful:", data);
  } else {
    console.error("Login failed:", data);
  }
});

protected.addEventListener("click", async () => {
  const token = await cookieStore.get("session_token");
  const response = await fetch("http://localhost:3000/api/protected", {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  const data = await response.json();
  console.log("Response from server:", data);
});
