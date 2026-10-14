/* ============================
   Ano automático no rodapé
   ============================ */
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

/* ============================
   Menu responsivo (abrir/fechar)
   ============================ */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
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
}

/* ============================
   Mensagens de incentivo
   ============================ */
const messageBtn = document.getElementById("messageBtn");
const mensagem = document.getElementById("mensagem");

const mensagens = [
    // 4 originais
    "Você é importante. Reserve um tempo para cuidar da sua saúde! 💗",
    "Informação e atenção à saúde fazem a diferença. 🎀",
    "Não ignore mudanças no seu corpo. Procure orientação profissional! 🌷",
    "Cuidar de você também é um ato de amor. 💕",

    // 22 novas mensagens
    "A prevenção é um gesto de carinho com você mesma. 💖",
    "Conhecer o próprio corpo é o primeiro passo para se cuidar. 🎀",
    "Falar sobre o Outubro Rosa é ajudar a salvar vidas. 💗",
    "O diagnóstico precoce aumenta as chances de um tratamento tranquilo. 🌸",
    "Não tenha medo de procurar ajuda: você não está sozinha. 🤝",
    "Compartilhe informação. Alguém perto de você pode precisar. 📣",
    "Sua saúde merece atenção todos os dias, não só em outubro. 💕",
    "Um exame em dia pode trazer mais tranquilidade para você. 🩺",
    "Amor-próprio também é fazer exames e se cuidar. 💗",
    "Você merece se sentir bem, cuidada e informada. 🌷",
    "Cada atitude de cuidado conta. Comece por você. 🌼",
    "A informação correta combate o medo e salva vidas. 💡",
    "Reserve um momento do seu dia para pensar na sua saúde. 💖",
    "O cuidado com as mamas faz parte do cuidado com a vida. 🎀",
    "Apoie quem está passando por isso: acolher também é prevenir. 🤗",
    "Sua história importa. Sua saúde também. 🌹",
    "Não deixe para depois o cuidado que pode ser feito agora. ⏰",
    "O Outubro Rosa é um lembrete: cuide-se com carinho. 💗",
    "Falar sobre prevenção é um ato de coragem e amor. 💪",
    "Você não precisa enfrentar nada sozinha. Busque apoio. 🌸",
    "Um simples check-up pode mudar tudo. Não adie o seu. ✅",
    "Que tal começar hoje a cuidar melhor de você? 💕"
];

if (messageBtn && mensagem) {
    messageBtn.addEventListener("click", function () {
        const indice = Math.floor(Math.random() * mensagens.length);
        mensagem.textContent = mensagens[indice];
    });
}