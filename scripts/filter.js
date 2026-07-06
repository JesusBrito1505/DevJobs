const filtersContainer = document.getElementById("filters");
const filters = filtersContainer.querySelectorAll('select');

let filterName = " ";
let value = " ";

filters.forEach(filter =>{
    filter.addEventListener('change', function(event){
        filterName = event.target.name;
        value = event.target.value;
        console.log(name + " " + value);
    })
})



const jobsListing = document.querySelector(".job-listings");
const articles = jobsListing.querySelectorAll("article")

articles.forEach(article => {
    if(article.querySelector[".contrato"] === value ){
        article.classList.remove("hidden");
    }else{
        article.classList.add("hidden");
    }
});
