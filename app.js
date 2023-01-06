let firstCard = document.querySelector(".first-page-container"); 
let tyCard = document.querySelector(".thank-you-card"); 
let button = document.getElementById("firstButton"); 
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

button.addEventListener("click", () =>{
    tyCard.classList.remove("disable")
    firstCard.style.display = "none";

})

rates.forEach((rates) => { 
    rates.addEventListener("click", () => { 
        rating.innerHTML = rates.innerHTML
    })
})