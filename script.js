document.addEventListener("DOMContentLoaded", function() {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        const clone = service.cloneNode(true);
        sliderWrapper.appendChild(clone);
    });
});