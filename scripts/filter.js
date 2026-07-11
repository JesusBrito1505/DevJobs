const filtersContainer = document.getElementById("filters");
const filters = filtersContainer?.querySelectorAll('select');

        
const jobsListing = document.querySelector(".job-listings");
const articles = jobsListing?.querySelectorAll("article")

let filterName = "";
let filterValue = "";

filters?.forEach(filter =>{
    filter.addEventListener('change', function(event){

        filterName = event.target.name;
        filterValue = event.target.value;

        articles?.forEach(article => {
            const contrato = article.querySelector(".contrato").textContent.trim();
            const isShown = contrato === filterValue || filterValue === "Todos";
            article.classList.toggle("hidden", !isShown)
        });
    })
})

