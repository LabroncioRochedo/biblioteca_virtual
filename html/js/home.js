import mangas from "./mangas.js";

// Mangás que aparecerão na seção Populares, nesta ordem.
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

// Evita que caracteres especiais dos dados sejam interpretados como HTML.
function escaparHTML(valor = "") {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

// Cria o card de cada mangá.
function criarCard(manga) {
  return `
    <li class="manga-card">
        <img
          src="${escaparHTML(manga.imagem)}"
          alt="Capa de ${escaparHTML(manga.nome)}"
          loading="lazy"
        >
        <h6>${escaparHTML(manga.nome)}</h3>
    </li>
  `;
}

// Cria uma seção com título e lista de mangás.
function criarSecao(titulo, lista, classe = "") {
  if (lista.length === 0) return "";

  return `
    <section class="manga-section ${classe}">
      <h2>${escaparHTML(titulo)}</h2>

      <ul class="manga-list">
        ${lista.map(criarCard).join("")}
      </ul>
    </section>
  `;
}

// Gera o conteúdo da página inicial.
export function renderizarHome(elemento = document.querySelector("main")) {
  if (!elemento) {
    console.error("Não foi encontrado um elemento <main> na página.");
    return;
  }

  // Busca os mangás populares no arquivo mangas.js.
  const listaPopulares = populares
    .map(nome =>
      mangas.find(manga =>
        manga.nome.toLowerCase() === nome.toLowerCase()
      )
    )
    .filter(Boolean);

  // Identifica todas as categorias cadastradas.
  const categorias = [
    ...new Set(
      mangas.flatMap(manga => manga.categorias || [])
    )
  ].sort((a, b) => a.localeCompare(b, "pt-BR"));

  // Cria automaticamente uma seção para cada categoria.
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

  // Insere todas as seções no <main>.
  elemento.innerHTML =
    criarSecao("Populares", listaPopulares, "populares-section") +
    secoesCategorias;
}

// Executa quando o HTML estiver pronto.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderizarHome();
  });
} else {
  renderizarHome();
}