import mangas from "./mangas.js";


const populares = [
  "One Piece",
  "Bleach",
  "Vinland Saga",
  "Kingdom",
  "Chainsaw Man",
  "Berserk",
  "One-Punch Man",
  "JoJo's Bizarre Adventure",
  "Monster",
  "Demon Slayer",
  "Naruto",
  "Jujutsu Kaisen"
];

function escaparHTML(valor = "") {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

function criarCard(manga) {
  return `
    <li class="manga-card">
      <a href="manga.html?nome=${encodeURIComponent(manga.nome)}">
      <img
        src="${escaparHTML(manga.imagem)}"
        alt="Capa de ${escaparHTML(manga.nome)}"
        loading="lazy"
      >
      </a>
      <h6>${escaparHTML(manga.nome)}</h6>
    </li>
  `;
}

function criarSecao(titulo, lista, classe = "") {
  if (lista.length === 0) return "";

  return `
    <section class="secao-manga ${classe}">
      <h2>${escaparHTML(titulo)}</h2>

      <div class="carrossel">
        <button
          class="seta seta-esquerda"
          type="button"
          aria-label="Ver ${escaparHTML(titulo)} anteriores"
        >&#10094;</button>

        <ul class="lista-manga">
          ${lista.map(criarCard).join("")}
        </ul>

        <button
          class="seta seta-direita"
          type="button"
          aria-label="Ver próximos ${escaparHTML(titulo)}"
        >&#10095;</button>
      </div>
    </section>
  `;
}

function configurarCarrosseis(elemento) {
  const carrosseis = elemento.querySelectorAll(".carrossel");

  carrosseis.forEach(carrossel => {
    const lista = carrossel.querySelector(".lista-manga");
    const esquerda = carrossel.querySelector(".seta-esquerda");
    const direita = carrossel.querySelector(".seta-direita");

    esquerda.addEventListener("click", () => {
      lista.scrollBy({
        left: -lista.clientWidth * 0.8,
        behavior: "smooth"
      });
    });

    direita.addEventListener("click", () => {
      lista.scrollBy({
        left: lista.clientWidth * 0.8,
        behavior: "smooth"
      });
    });

    function atualizarSetas() {
      const maximo = lista.scrollWidth - lista.clientWidth;

      esquerda.disabled = lista.scrollLeft <= 1;
      direita.disabled = lista.scrollLeft >= maximo - 1;

      esquerda.classList.toggle("seta-desativada", esquerda.disabled);
      direita.classList.toggle("seta-desativada", direita.disabled);
    }

    lista.addEventListener("scroll", atualizarSetas, { passive: true });
    window.addEventListener("resize", atualizarSetas);

    atualizarSetas();
  });
}

export function renderizarHome(elemento = document.querySelector("main")) {
  if (!elemento) {
    console.error("Não foi encontrado um elemento <main> na página.");
    return;
  }

  const listaPopulares = populares
    .map(nome =>
      mangas.find(manga =>
        manga.nome.toLowerCase() === nome.toLowerCase()
      )
    )
    .filter(Boolean);

  const categorias = [
    ...new Set(
      mangas.flatMap(manga => manga.categorias || [])
    )
  ].sort((a, b) => a.localeCompare(b, "pt-BR"));

  const secoesCategorias = categorias
    .map(categoria => {
      const lista = mangas.filter(manga =>
        (manga.categorias || []).includes(categoria)
      );

      return criarSecao(
        categoria,
        lista,
        "categoria-section"
      );
    })
    .join("");

  elemento.innerHTML =
    criarSecao("Populares", listaPopulares, "populares-section") +
    secoesCategorias;

  configurarCarrosseis(elemento);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderizarHome();
  });
} else {
  renderizarHome();
}
