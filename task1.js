let home=document.querySelector("#home");
let about=document.querySelector("#about");
let service=document.querySelector("#service");
let contact=document.querySelector("#contact");
let homeTab=document.querySelector("#home-tab");
let aboutTab=document.querySelector("#about-tab");
let serviceTab=document.querySelector("#service-tab");
let contactTab=document.querySelector("#contact-tab");

home.addEventListener("click",function () {
    homeTab.classList.remove("d-none")
    aboutTab.classList.add("d-none")
    serviceTab.classList.add("d-none")
    contactTab.classList.add("d-none")
})
about.addEventListener("click",function() {
    homeTab.classList.add("d-none")
    aboutTab.classList.remove("d-none")
    serviceTab.classList.add("d-none")
    contactTab.classList.add("d-none")
})
service.addEventListener("click",function() {
    homeTab.classList.add("d-none")
    aboutTab.classList.add("d-none")
    serviceTab.classList.remove("d-none")
    contactTab.classList.add("d-none")
})
contact.addEventListener("click",function() {
    homeTab.classList.add("d-none")
    aboutTab.classList.add("d-none")
    serviceTab.classList.add("d-none")
    contactTab.classList.remove("d-none")
})
