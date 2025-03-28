

// Get elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Add click event to gallery items
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

// Close lightbox on click outside the image
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".modal .close");

    const productDetails = {
        milk: {
            title: "Fresh Milk",
            description:
                "Our milk is sourced from cows that are cared for with love and attention. It's fresh, nutritious, and perfect for your family."
        },
        cheese: {
            title: "Artisanal Cheese",
            description:
                "Made with traditional methods, our artisanal cheese offers a rich flavor and creamy texture. Ideal for all occasions."
        },
        butter: {
            title: "Creamy Butter",
            description:
                "Our butter is churned to perfection from the freshest cream, delivering a rich and satisfying taste."
        }
    };

    document.querySelectorAll(".learn-more-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            const { title, description } = productDetails[product];
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
