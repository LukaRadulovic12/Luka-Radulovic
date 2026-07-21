console.log("Frontend is running!");

const BACKEND_URL = "http://localhost:3000";

const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");
const protectedButton = document.getElementById("protected-button");

registerButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const response = await fetch(`${BACKEND_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  console.log(data);
});

loginButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const response = await fetch(`${BACKEND_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  localStorage.setItem("token", data.token);

  console.log(data);
});

protectedButton.addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BACKEND_URL}/api/protected`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
});
