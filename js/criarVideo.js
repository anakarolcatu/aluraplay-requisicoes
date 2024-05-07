import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    //previne o comportamento padrão do formulário
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        //redireciona a página caso o envio seja efetuado com sucesso
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }         
}

//o formulário só será enviado ao clicar no botão submit
formulario.addEventListener("submit", evento => criarVideo(evento));