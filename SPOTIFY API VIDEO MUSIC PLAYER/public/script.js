async function loadSongs() {
  const res = await fetch("/songs");
  const data = await res.json();

  const container = document.getElementById("songs");

  data.forEach((song) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${song.name}</h3>
      <p>${song.artist}</p>
      <img src="${song.image}" width="150" />
      <br/>
      ${
        song.preview
          ? `<audio controls src="${song.preview}"></audio>`
          : "<p>Nema preview</p>"
      }
      <hr/>
    `;

    container.appendChild(div);
  });
}

loadSongs();
