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
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '../data/converter.json');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            const data = JSON.parse(xhr.response);

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
        };
    };
};

converter(somInput);
converter(usdInput);
converter(eurInput);


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
const  dataFetch= () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${numID}`)
    .then((response) => response.json())
    .then((data) => {
        render(data)
    })
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