import mangas from "./mangas.js";

const parametros = new URLSearchParams(window.location.search);
const nomeManga = parametros.get("nome");

const manga = mangas.find(m =>
    m.nome.toLowerCase() === (nomeManga || "").toLowerCase()
);

const elemento = document.querySelector("#detalhes-manga");

function escaparHTML(valor = "") {
    return String(valor).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caractere]);
}

if (manga) {
    document.title = manga.nome;

    elemento.innerHTML = `
        <section class="detalhes">

            <div class="capa">
                <img
                    src="${escaparHTML(manga.imagem)}"
                    alt="Capa de ${escaparHTML(manga.nome)}"
                >
            </div>

            <div class="informacoes">

                <h1>${escaparHTML(manga.nome)}</h1>

                <div class="linha"></div>

                <h2>Descrição</h2>

                <p class="descricao">
                    ${escaparHTML(manga.descricao)}
                </p>

                <h2>Autor</h2>

                <p>${escaparHTML(manga.autor)}</p>

                <div class="capitulos">

                    <div class="capitulo-info">
                        <span class="numero">0</span>
                        <span>Capítulos</span>
                    </div>

                    <div class="capitulo-info">
                        <span class="numero">0</span>
                        <span>Capítulos lidos</span>
                    </div>

                </div>

                <button type="button" class="botao-ler">
                    Ler mangá
                </button>

            </div>

        </section>
    `;
} else {
    elemento.innerHTML = `
        <div class="erro">
            <h1>Mangá não encontrado</h1>
            <p>Não foi possível encontrar as informações desse título.</p>
            <a href="home.html">Voltar para a biblioteca</a>
        </div>
    `;
}
