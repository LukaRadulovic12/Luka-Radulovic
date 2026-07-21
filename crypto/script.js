async function fetchData() {
  const response = await fetch("http://127.0.0.1:3000/api/health");

  const data = await response.json();
  console.log(data);
}
fetchData();
async function fetchCrypto() {
  const response = await fetch("http://127.0.0.1:3000/api/crypto");

  const data = await response.json();

  console.log(data);
}
fetchCrypto();
