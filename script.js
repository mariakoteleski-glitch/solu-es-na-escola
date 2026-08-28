// ==========================================
// PROJETO: Problemas e Soluções na Escola
// ==========================================

// Função para enviar uma sugestão
function enviarSugestao(event) {
    event.preventDefault();

    // Pega os valores digitados pelo usuário
    const nome = document.getElementById("nome").value;
    const problema = document.getElementById("problema").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se os campos estão preenchidos
    if (nome.trim() === "" || problema.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Mostra a sugestão enviada
    alert(
        "✅ Sugestão enviada com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Problema: " + problema + "\n" +
        "Solução: " + mensagem
    );

    // Limpa o formulário
    document.querySelector("form").reset();
}


// ==========================================
// ROLAGEM SUAVE NO MENU
// ==========================================

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const destino = document.querySelector(
            link.getAttribute("href")
        );

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==========================================
// EFEITO NOS CARDS
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });

});


// ==========================================
// MENSAGEM AO CARREGAR A PÁGINA
// ==========================================

window.addEventListener("load", function() {
    console.log("🏫 Projeto Problemas e Soluções na Escola carregado!");
});