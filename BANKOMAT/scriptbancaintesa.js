const depozit = document.getElementById("depozit");
const podizanjenovca = document.getElementById("podizanjenovca");
const stanjeracuna = document.getElementById("stanjeracuna");

depozit.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = "./depozit.html";
  iframe.style.width = "100%";
  iframe.style.height = "100vh";
  iframe.style.display = "block";
  iframe.style.margin = "auto";

  // Append the iframe to your page
  document.getElementById("container").appendChild(iframe);
});
podizanjenovca.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = "./podizanjenovca.html";
  iframe.style.width = "100%";
  iframe.style.height = "100vh";
  iframe.style.display = "block";
  iframe.style.margin = "auto";

  // Append the iframe to your page
  document.getElementById("container").appendChild(iframe);
});
stanjeracuna.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = "./stanjeracuna.html";
  iframe.style.width = "100%";
  iframe.style.height = "100vh";
  iframe.style.display = "block";
  iframe.style.margin = "auto";

  // Append the iframe to your page
  document.getElementById("container").appendChild(iframe);
});