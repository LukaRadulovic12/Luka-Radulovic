async function loadStocks() {
  const res = await fetch("http://localhost:3000/stocks");
  const json = await res.json();

  const container = document.getElementById("stocks");
  container.innerHTML = "";

  // loading state
  if (json.loading) {
    container.innerHTML = "<p>Loading stocks...</p>";
    return;
  }

  const data = json.data;

  if (!Array.isArray(data)) {
    container.innerHTML = "<p>Error loading data</p>";
    return;
  }

  data.forEach((stock) => {
    container.innerHTML += `
      <div style="
        padding:10px;
        margin:5px;
        background:#1e293b;
        color:white;
        border-radius:8px;
        display:inline-block;
      ">
        <b>${stock.symbol}</b><br>
        $${stock.price}
      </div>
    `;
  });
}

// prvi load
loadStocks();

// refresh svakih 10 sekundi
setInterval(loadStocks, 10000);
