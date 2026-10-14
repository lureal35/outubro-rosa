
// Atualiza automaticamente o ano do rodapé
const ano = document.getElementById("ano");
ano.textContent = new Date().getFullYear();

// Abre e fecha o menu em telas pequenas
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    const aberto = menu.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", aberto);
    menuBtn.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuBtn.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu depois de clicar em um link
const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menu");
        menuBtn.textContent = "☰";
    });
});

// Exibe mensagens de incentivo
const messageBtn = document.getElementById("messageBtn");
const mensagem = document.getElementById("mensagem");

const mensagens = [
    "Você é importante. Reserve um tempo para cuidar da sua saúde! 💗",
    "Informação e atenção à saúde fazem a diferença. 🎀",
    "Não ignore mudanças no seu corpo. Procure orientação profissional! 🌷",
    "Cuidar de você também é um ato de amor. 💕"
];

messageBtn.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * mensagens.length);

    mensagem.textContent = mensagens[indice];
});
