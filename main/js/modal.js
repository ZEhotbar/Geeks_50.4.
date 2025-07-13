// MODAL

const modal = document.querySelector('.modal')
const modalOpenBTn = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')


const open = () => {
    modal.style.display = 'block'
}
const close = () => {
    modal.style.display = 'none'
}

modalOpenBTn.onclick = open
modalCloseBtn.onclick = close
modal.onclick = close 



const onSkrol = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        open();
        window.removeEventListener('scroll' , onSkrol);
    }
}

window.addEventListener('scroll' , onSkrol)

setInterval(open , 10000)