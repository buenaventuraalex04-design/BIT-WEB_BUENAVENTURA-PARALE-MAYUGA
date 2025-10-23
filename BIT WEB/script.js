document.addEventListener("DOMContentLoaded", () => {
    cons links = document.querySelectorAll("nav a");

//    links.forEach(link => {
        link.addEventListener("click", event => {
        event.preventDefault(0; 
        const sectionId = link.getAttribute("data-section");
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        
        });
    });

});

