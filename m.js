// script.js

document.addEventListener('DOMContentLoaded', function() {
    const editTitleBtn = document.getElementById('edit-title-btn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal');
    const saveTitleBtn = document.getElementById('save-title-btn');
    const title = document.getElementById('title');
    const newTitleInput = document.getElementById('new-title');
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const uploadImageInput = document.getElementById('upload-image');
    const profilePic = document.getElementById('profile-pic');

    // Open modal to edit title
    editTitleBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Save new title
    saveTitleBtn.addEventListener('click', function() {
        title.textContent = newTitleInput.value;
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Toggle dark/light mode
    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Handle profile picture upload
    uploadImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
