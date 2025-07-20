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

// somImput.oninput = () => {
    
    
//     const xhr = new  XMLHttpRequest();
//     xhr.open('GET','../data/converter.json');
//     xhr.setRequestHeader('Content-type','application/json')
//     xhr.send();
    
    
//     xhr.onload = () => {
//         const VasheBezRaznitce = JSON.parse(xhr.response)
//         usdInput.value = (somImput.value  / VasheBezRaznitce.usd).toFixed(2);
//     }
// };

// somImput.oninput = () => {
    
    
//     const xhr = new  XMLHttpRequest();
//     xhr.open('GET','../data/converter.json');
//     xhr.setRequestHeader('Content-type','application/json')
//     xhr.send();
    
    
//     xhr.onload = () => {
//         const VasheBezRaznitce = JSON.parse(xhr.response)
//         somImput.value = (usdInput.value  * VasheBezRaznitce.usd).toFixed(2);
//     }
// };

//  DRY - don't repeat yourself
//  KISS - keep is simple, stuped!!
//  KISS - keep is super simple
//  BEM - ... 

