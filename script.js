let banners = document.querySelectorAll('.banner');
let texts = document.querySelectorAll('.text');
let currentIndex = 0;

function alternarBanner() {
    // Remover a classe 'selecionado' do banner e do texto atual
    if (banners[currentIndex] && texts[currentIndex]) {
        banners[currentIndex].classList.remove('selecionado');
        texts[currentIndex].classList.remove('selecionado');
    }

    // Atualizar o índice para o próximo banner e texto
    currentIndex = (currentIndex + 1) % banners.length;

    // Adicionar a classe 'selecionado' ao próximo banner e texto
    if (banners[currentIndex] && texts[currentIndex]) {
        banners[currentIndex].classList.add('selecionado');
        texts[currentIndex].classList.add('selecionado');
    }

    console.log("Alternando banner e texto");
}

// Alternar a cada 6 segundos
setInterval(alternarBanner, 6000);
