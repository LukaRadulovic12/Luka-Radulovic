const API = "http://localhost:3000/api/recepti";

async function load() {
  const res = await fetch(API);
  const data = await res.json();

  const table = document.getElementById("tabela");
  table.innerHTML = "";

  data.slice(0, 50).forEach(r => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${r.label}</td>
      <td>${r.source}</td>
      <td><img src="${r.image}" width="80"></td>
      <td>${Math.round(r.calories)}</td>
    `;

    table.appendChild(row);
  });
}

load();