document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector("footer p");
    yearSpan.textContent = `© ${new Date().getFullYear()} KSHS Robotics Club`;
});
