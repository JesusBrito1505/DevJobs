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
        console.log(filterName + " " + filterValue);

        articles?.forEach(article => {

            const contrato = article.querySelector(".contrato").textContent.trim();
            
            if(contrato === filterValue ){
                article.classList.remove("hidden");
            }else{
                article.classList.add("hidden");
            }
        });
    })
})

