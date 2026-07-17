const container = document.querySelector(".job-listings");
fetch('./data.json')
    .then( (response)  =>{ 
        return response.json();
    })
    .then((jobs) => {
        console.log(jobs);

        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'

            article.dataset.modalidad = job.data.modalidad
            article.dataset.technology = job.data.technology
            article.dataset.nivel = job.data.nivel

            article.innerHTML = `<div>
                                    <h4>${job.titulo}</h4>
                                    <small>${job.empresa}</small>
                                    <span class="contrato">${job.ubicacion}</span>
                                    <p>${job.descripcion}</p>
                                </div>
                                <button class="button-apply-job">Aplicar</button>`
            
            container.appendChild(article);
        });
    })
    .catch((error)=>{
        console.error("Error fetching data: ", error);
    })

