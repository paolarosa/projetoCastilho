document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        const clone = service.cloneNode(true);
        sliderWrapper.appendChild(clone);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const sliderWrapper = document.querySelector(".slider-wrapper");
//     const services = document.querySelectorAll(".service");
//     const numberOfClones = Math.ceil(sliderWrapper.offsetWidth / (services[0].offsetWidth + 20)); // Calcula o número de clones necessários

//     services.forEach(service => {
//         for (let i = 0; i < numberOfClones; i++) {
//             const clone = service.cloneNode(true);
//             sliderWrapper.appendChild(clone);
//         }
//     });
// });

