async function loadShows() {
  const res = await fetch("/shows");
  const data = await res.json();

  const container = document.getElementById("movies");

  data.forEach((show) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${show.image?.medium}" />
      <h3>${show.name}</h3>
      <p>⭐ ${show.rating?.average || "N/A"}</p>
    `;

    container.appendChild(div);
  });
}

loadShows();
