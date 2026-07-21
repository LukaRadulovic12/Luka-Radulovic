const bancaintesa = document.getElementById("cardbancaintesa");
const otpbanka = document.getElementById("cardotpbanka");
const raiffeisenbanka = document.getElementById("cardraiffeisenbanka");
const unicreditbanka = document.getElementById("cardunicreditbanka");
const nlbkomercijalnabanka = document.getElementById(
  "cardnlbkomercijalnabanka",
);
const aikbanka = document.getElementById("cardaikbanka");
const erstebanka = document.getElementById("carderstebanka");
const procreditbanka = document.getElementById("cardprocreditbanka");
const addikobanka = document.getElementById("cardaddikobanka");
const postanskastedionicabanka = document.getElementById(
  "cardpostanskastedionicabanka",
);

function preusmeravanje(banka, url) {
  banka.addEventListener("click", () => {
    window.location.href = url;
  });
}

preusmeravanje(bancaintesa, "http://127.0.0.1:5500/bancaintesa.html");
preusmeravanje(otpbanka, "http://127.0.0.1:5500/otpbanka.html");
preusmeravanje(raiffeisenbanka, "http://127.0.0.1:5500/raiffeisenbanka.html");
preusmeravanje(unicreditbanka, "http://127.0.0.1:5500/unicreditbanka.html");
preusmeravanje(
  nlbkomercijalnabanka,
  "http://127.0.0.1:5500/nlbkomercijalnabanka.html",
);
preusmeravanje(aikbanka, "http://127.0.0.1:5500/aikbanka.html");
preusmeravanje(erstebanka, "http://127.0.0.1:5500/erstebanka.html");
preusmeravanje(procreditbanka, "http://127.0.0.1:5500/procreditbanka.html");
preusmeravanje(addikobanka, "http://127.0.0.1:5500/addikobanka.html");
preusmeravanje(
  postanskastedionicabanka,
  "http://127.0.0.1:5500/postanskastedionicabanka.html",
);
let inputpotreba = document.getElementById("inputpotreba");
const buttonpretrage = document.getElementById("buttonpretrage");
let delovi = [];
const rezultat = document.getElementById("rezultat");
buttonpretrage.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  delovi = inputpotreba.value.split(" ");
  const bankah1 = document.getElementById("bankah1");
  switch (delovi[0]) {
    case "bancaintesa":
      bankah1.src = "./ASSETS/IMAGES/banca-intesa-logo-vector.png";
      switch (delovi[1]) {
        case "depozit":
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "otpbanka":
      bankah1.src =
        "./ASSETS/IMAGES/OTP-Banka-Srbija_BGD-scaled-e1650374227218-1000x560.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "raiffeisenbanka":
      bankah1.src =
        "./ASSETS/IMAGES/Banca-Intesa-Hercegovacka-ulica-1536x1024-2-640x640.webp";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "unicreditbanka":
      bankah1.src =
        "./ASSETS/IMAGES/UniCredit-u-Beogradu-na-vodi-1-768x1024.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "nlbkomercijalnabanka":
      bankah1.src = "./ASSETS/IMAGES/NLB-Komercijalna-banka.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "aikbanka":
      bankah1.src = "./ASSETS/IMAGES/AikBank-fotografija-e1744361384366.webp";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "erstebanka":
      bankah1.src =
        "./ASSETS/IMAGES/Erste Bank Serbia, Belgrade.jpg.189978a46a819094.x417yw1503h1281.w1280.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "procreditbanka":
      bankah1.src = "./ASSETS/IMAGES/naslovna1.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "addikobanka":
      bankah1.src = "./ASSETS/IMAGES/AikBank-fotografija-e1744361384366.webp";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;
    case "postanskastedionicabanka":
      bankah1.src = "./ASSETS/IMAGES/postanska_stedionica_030114_tw1024.jpg";
      switch (delovi[1]) {
        case "depozit":
          const iframe = document.createElement("iframe");
          iframe.src = "./depozit.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        case "podizanjenovca":
          iframe.src = "./podizanjenovca.html";
          iframe.style.width = "100%";
          iframe.style.height = "100vh";
          iframe.style.display = "block";
          iframe.style.margin = "auto";

          // Append the iframe to your page
          document.getElementById("container").appendChild(iframe);
          break;
        default:
          break;
      }
      break;

    default:
      rezultat.innerText = "Uneli ste pogresnu uslugu";
  }
});
