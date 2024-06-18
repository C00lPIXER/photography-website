document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission (you can replace this with actual form submission code)
        alert('Form submitted successfully!');

        // Reset form
        form.reset();
    });

    // Image Modal Functionality
    const photos = document.querySelectorAll('.photo img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            openModal(photo.src);
        });
    });

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');

    function openModal(src) {
        modal.style.display = 'block';
        modalImg.src = src;
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
