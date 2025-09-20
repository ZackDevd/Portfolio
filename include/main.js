/* ======================================
   Navbar Toggle
====================================== */
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    burger.textContent = burger.textContent === "☰" ? "✕" : "☰";
}

/* ======================================
   Modal Controls
====================================== */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = (event) => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) modal.style.display = "none";
    });
};

/* ======================================
   Custom Alert Box
====================================== */
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const alertClose = document.getElementById('alert-close');

// Check social links before navigating
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') {
            e.preventDefault();
            alertMessage.textContent = "This social link is not available yet!";
            customAlert.style.display = "block";
        }
    });
});

// Close custom alert
alertClose.addEventListener('click', () => {
    customAlert.style.display = "none";
});
