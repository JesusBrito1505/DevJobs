window.addEventListener('DOMContentLoaded', ()=>{
    const jobData = JSON.parse(localStorage.getItem('jobData'));
    if(jobData){
        
        document.querySelector(".job-title").textContent = jobData.title;
        document.querySelector(".job-enterprise").textContent = jobData.enterprise;
        document.querySelector(".job-description").textContent = jobData.description;
    }
})