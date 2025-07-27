// cards create dz_7

const API = 'https://6884aecb745306380a390b27.mockapi.io/weappens';

const container  = document.querySelector('.cards-inner')
const img = "https://cdn0.youla.io/files/images/720_720_out/64/33/6433f6c06060504dd1569e9b-1.jpg"

const feathCards = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();

        container.innerHTML = ''

        data.forEach(({img,name,type,description}) =>{
            const cards = document.createElement('div');
            cards.classList.add('cards-items');
            cards.innerHTML = `
            <div class="cards-img">
                <img src="${img}" alt="">
            </div>
            <div class="cards-content"> 
                <h2>${name}</h2>
                <h3>${type}</h3>
                <p>${description}</p>
            </div>
            `
            container.append(cards)
        });
    } catch(e) {
        console.log(e);
    }

}

feathCards()