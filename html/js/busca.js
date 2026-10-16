import mangas from "./mangas.js";

document.addEventListener("DOMContentLoaded", () => {
    const campoPesquisa = document.querySelector(".pesquisa input");
    const resultado = document.querySelector(".resultado");

    // Banco de dados dos mangás
    // O arquivo que contém o array mangas deve ser carregado antes deste arquivo.

    function exibirResultados(lista) {
        resultado.innerHTML = "";

        if (lista.length === 0) {
            const mensagem = document.createElement("p");
            mensagem.classList.add("mensagem-vazia");
            mensagem.textContent = "Nenhuma obra encontrada.";

            resultado.appendChild(mensagem);
            return;
        }

        const listaResultados = document.createElement("ol");

        lista.forEach((manga) => {
            const item = document.createElement("li");

            const imagem = document.createElement("img");
            imagem.src = manga.imagem;
            imagem.alt = `Capa de ${manga.nome}`;
            imagem.loading = "lazy";

            const titulo = document.createElement("h6");
            titulo.textContent = manga.nome;

            item.appendChild(imagem);
            item.appendChild(titulo);

            listaResultados.appendChild(item);
        });

        resultado.appendChild(listaResultados);
    }

    function pesquisarMangas() {
        const termo = campoPesquisa.value
            .trim()
            .toLocaleLowerCase("pt-BR");

        const encontrados = mangas.filter((manga) => {
            return manga.nome
                .toLocaleLowerCase("pt-BR")
                .includes(termo);
        });

        exibirResultados(encontrados);
    }

    // Pesquisa enquanto o usuário digita
    campoPesquisa.addEventListener("input", pesquisarMangas);

    // Exibe todas as obras inicialmente
    exibirResultados(mangas);
});
