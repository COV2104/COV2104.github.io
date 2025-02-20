let currentIndex = 0;

function showCertificates() {
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((cert, index) => {
        cert.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
    });
}

function moveSlide(direction) {
    const certificates = document.querySelectorAll('.certificate');
    const totalCertificates = certificates.length;

    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalCertificates - 3; // Показать последние три сертификата
    } else if (currentIndex > totalCertificates - 3) {
        currentIndex = 0; // Вернуться к первому набору сертификатов
    }

    showCertificates();
}

// Инициализация слайдера
document.addEventListener("DOMContentLoaded", function() {
   showCertificates();
   
   window.openModal = function(imageSrc) {
       const modal = document.getElementById("modal");
       const modalImage = document.getElementById("modalImage");
       modal.style.display = "block";
       modalImage.src = imageSrc;
   };

   window.closeModal = function() {
       const modal = document.getElementById("modal");
       modal.style.display = "none";
   };
});