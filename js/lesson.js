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
