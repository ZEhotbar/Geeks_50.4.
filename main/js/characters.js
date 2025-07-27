function users() {
const xhr = new XMLHttpRequest();
xhr.open("GET", "../data/data.json");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    const container = document.querySelector('.characters-list');
    const wrapper = document.querySelector('.wrapper');
    const defaultBg = wrapper.style.backgroundImage;

    data.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('character-card');
    if (element.info) {
        card.dataset.info = element.info;
    }

    card.innerHTML = `
        <img class="character-photo" src="${element.img}" alt="${element.name}">
        <p class="character-name">Name: ${element.name}</p>
        <span class="character-age">Age: ${element.age}</span>
        <p class="character-info" style="display:none; margin-top:10px; font-size:0.9rem; color:#ccc;"></p>
    `;
    container.append(card);
    });

    const cards = document.querySelectorAll('.character-card');

    cards.forEach(card => {
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        if (isActive) {
        cards.forEach(styles => {
            styles.classList.remove('hidden', 'active');
            styles.querySelector('.character-info').style.display = 'none';
        });
        } else {
        cards.forEach(styles => {
            styles.classList.add('hidden');
            styles.classList.remove('active');
            styles.querySelector('.character-info').style.display = 'none';
        });

        card.classList.remove('hidden');
        card.classList.add('active');

        const infoEl = card.querySelector('.character-info');
        if (card.dataset.info) {
            infoEl.textContent = card.dataset.info;
            infoEl.style.display = 'block';
        }
        }
    });
    });
};
}

users();
