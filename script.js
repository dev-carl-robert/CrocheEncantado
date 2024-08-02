let banners = document.querySelectorAll('.banner');
let currentBannerIndex = 0;

function alternarBanner() {
    if (banners[currentBannerIndex]) {
        banners[currentBannerIndex].classList.remove('selecionado');
    }

    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    
    if (banners[currentBannerIndex]) {
        banners[currentBannerIndex].classList.add('selecionado');
        console.log("estou funcionando")
    }
}




setInterval(alternarBanner, 6000);