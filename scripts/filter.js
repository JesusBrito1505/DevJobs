const filtersContainer = document.getElementById("filters");
const filters = filtersContainer?.querySelectorAll('select');

filters?.forEach(filter =>{
    filter.addEventListener('change', function(event){

        const jobsListing = document.querySelector(".job-listings");
        const articles = jobsListing?.querySelectorAll("article");

        let levelFilterValue = document.querySelector('[name=level]').value;
        let locationFilterValue = document.querySelector('[name=location]').value;

        articles?.forEach(article => {

            const level = article.dataset.nivel;
            const technology = article.dataset.technology;
            const location = article.dataset.modalidad;

            const locationFilter = location === locationFilterValue || locationFilterValue === "all";
            
            const levelFilter = level === levelFilterValue || levelFilterValue === "all";

            const isShown = locationFilter && levelFilter;

            article.classList.toggle("hidden", !isShown);
        });
    })
})

