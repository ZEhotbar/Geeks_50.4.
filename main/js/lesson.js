//phone 

const phon_input = document.querySelector('#phone_input');
const phon_BTN  = document.querySelector('#phone_button');
const phon_result = document.querySelector('#phone_result');

const regEXP = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

const ChekPhon = () => {
    if (regEXP.test(phon_input.value)) {
        phon_result.innerHTML = 'OK'
        phon_result.style.color = "green"
    }
    else {
        phon_result.innerHTML = 'ERROR'
        phon_result.style.color = "red"
    }
}

phon_BTN.onclick = (ChekPhon)


//slider tabs по правельноиму
const tabContentBlock = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabParents = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlock.forEach((item) =>{
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) =>{
    tabContentBlock[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
}


hideTabContent();
showTabContent();

tabParents.onclick = (event) => {
    clearInterval()
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab , index) =>{
            if (event.target === tab ) {
                hideTabContent();
                showTabContent(index);
                indexSlider = index;
            }
        })
    };
}


let indexSlider = 0;



setInterval(() => {
    indexSlider++;
    if( indexSlider >= tabContentBlock.length) {
        indexSlider = 0 
    }
    hideTabContent();
    showTabContent(indexSlider);
},5000)



// CONvetor 
const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json');
            const data = await response.json();

            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.eur).toFixed(2);
            }

            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
            }

            if (element.id === 'eur') {
                somInput.value = (element.value * data.eur).toFixed(2);
                usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2); 
            }

            if (element.value === '') {
                eurInput.value = '';
                somInput.value = '';
                usdInput.value = '';
            }

        } catch (e) {
            console.log(e);
        }
    };
};

converter(somInput);
converter(usdInput);
converter(eurInput);


// cards SWithers
const cardBLock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnBack = document.querySelector('#btn-prev')

let numID = 1;

const render = (data) => {
        const {title, id , completed} = data;
        cardBLock.style.borderColor = completed ? 'green' : 'red';
        cardBLock.style.borderColor =  
        cardBLock.innerHTML =`
        <p>${title}</p>
        <p>${completed}</p>
        <span>${id}</span>`
};
const  dataFetch =  async() => {
    try{
    const response =  await fetch(`https://jsonplaceholder.typicode.com/todos/${numID}`)
    const data = await response.json()
    render(data)
    } catch(e) {
        console.log(e);
    }
};


btnNext.onclick = () => {
    numID = numID === 200 ? 1 : numID + 1;
    dataFetch();
};

btnBack.onclick = () => { 
    numID = numID === 1 ? 200 : numID - 1;
    dataFetch();
};

dataFetch();

// fetch запрос 

const data2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then(data2 =>{
    data2.forEach(item => {
        console.log(item);
    })
})

//Wather 
const searchInput = document.querySelector('.cityName'); 
const searchButton = document.querySelector('#search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e417df62e04d3b1b111abeab19cea714';


const searchWather = async () => {
        if (searchInput.value === '') {
        city.innerHTML = 'Введите название города';
    } else {
        try {
        const response = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=ru`)
        const data =  await response.json()
        city.innerHTML = data?.name || 'Города нет'
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C' : '';
        searchInput.value = '';
        } catch(e) {
            console.log(e);
        }
    }
}

searchButton.onclick = () => searchWather()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        searchWather()
    };
}
