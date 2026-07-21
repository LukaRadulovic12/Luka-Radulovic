async function loadMovies() {
  const res = await fetch("http://localhost:3000/movies");
  const data = await res.json();

  const table = document.getElementById("movieTable");

  data.forEach(movie => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${movie.Title}</td>
      <td>${movie.Year}</td>
      <td>${movie.Type}</td>
      <td>
        <img src="${movie.Poster}" width="60"/>
      </td>
    `;

    table.appendChild(row);
  });
}

loadMovies();