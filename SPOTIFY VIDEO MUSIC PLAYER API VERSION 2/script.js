async function loadSongs() {
  const res = await fetch("http://localhost:3000/tracks");
  const data = await res.json();

  const container = document.getElementById("songs");
  container.innerHTML = "";

  data.forEach((song) => {
    container.innerHTML += `
      <div>
        <h3>${song.name}</h3>
        <p>${song.artist}</p>
        <img src="${song.image}" width="120"/>
        ${
          song.preview
            ? `<audio controls src="${song.preview}"></audio>`
            : "<p>No preview</p>"
        }
      </div>
      <hr/>
    `;
  });
}

loadSongs();