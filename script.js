function menuToggle() {
    const toggleBtn = document.querySelector(".toggle");
    const section = document.querySelector("section");
    toggleBtn.classList.toggle('active');
    section.classList.toggle('active');
}