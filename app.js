let path = `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`;
let card = document.getElementById("card")
let fecha = moment().format("YYYY MM DD - HH MM");
async function noticiasSimpson() {
    const response = await fetch(path);
    const noticia = await response.json();
    console.log(noticia);

    for (let index = 0; index < noticia.length; index++) {
        const element = noticia[index];
        card.innerHTML += `<div id="card1" class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">The Simpson</strong>
                        <h3 class="mb-0">${element.character}</h3>
                        <div class="mb-1 text-muted">${fecha}</div>
                        <p class="card-text mb-auto">${element.quote}</p>
                        <a href="#" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                    <img src="${element.image}" alt="">
                    </div>
                </div>
            </div>`

    }
}

try {
    noticiasSimpson();
} catch (error) {
    console.log(error);
}