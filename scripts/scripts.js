const jobsListingSection = document.querySelector(".job-listings");

jobsListingSection.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('button-apply-job')){
        const article = element.closest('article');
        
        const jobData = {
            title: article.querySelector('h4').textContent,
            enterprise: article.querySelector('small').textContent,
            description: article.querySelector('p').textContent,
        }

        localStorage.setItem('jobData', JSON.stringify(jobData));
        window.location.href='details.html';
    }

});
