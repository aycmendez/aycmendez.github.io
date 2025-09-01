function startSlideshow(sliderId, interval = 4000) {
    const container = document.getElementById(sliderId);
    const slides = container.querySelectorAll(".slide");
    let index = 0;

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        index = (index + 1) % slides.length;
        slides[index].style.display = "block";
        setTimeout(showSlides, interval);
    }

    showSlides();
}

// Start all 3 slideshows independently
startSlideshow("slider1", 4000);
startSlideshow("slider2", 4000);
startSlideshow("slider3", 4000);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cateringForm").addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent page reload

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            comment: document.getElementById("comment").value,
        };

        // Send data to backend
        fetch("/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => alert(data.message)) // Show success message
            .catch(error => console.error("Error:", error));
    });
});

// Lightbox functionality
const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    });
});

function showImage() {
    const img = galleryImages[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption || img.alt || '';
    lightbox.classList.add('show');

    // Highlight active thumbnail
    thumbnailContainer.querySelectorAll('img').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnailContainer.querySelector(`img[data-index="${currentIndex}"]`)?.classList.add('active');
}




