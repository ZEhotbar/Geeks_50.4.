//MODAL

const modal = document.querySelector('.modal')
const modalOpenBtn = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')

const open = () => {
    modal.style.display = 'block'
}
const close = () => {
    modal.style.display = 'none'
}

modalOpenBtn.onclick = open
modalCloseBtn.onclick = close

modal.onclick = (event) => {
    if (event.target === modal) {
        close();
    }
}

// Обновлённый скролл
const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
        open();
        window.removeEventListener('scroll', onScroll);
    }
};
window.addEventListener('scroll', onScroll);

setInterval(open, 100000);
