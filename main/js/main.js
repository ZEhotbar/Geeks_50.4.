// RANDOM COLOR GENERATOR

// const buttonsColor = document.querySelectorAll('.btn-color')
// const javaScript = document.querySelector('#js-color')

// const generateRandomColor = () => {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }

// const setRandomColors = () => {
//     buttonsColor.forEach((buttonColor) => {
//         buttonColor.innerHTML = generateRandomColor()
//         buttonColor.onclick = (event) => {
//             javaScript.style.color = event.target.innerHTML
//         }
//     })
// }

// window.onload = () => setRandomColors()
// window.onkeydown = (event) => {
//     if (event.code.toLowerCase() === 'space') {
//         event.preventDefault()
//         setRandomColors()
//     }
// }

// btn vidio 
const iframe = document.querySelector('#video-frame');
const btnsContainer = document.querySelector('.colors-buttons');

const LoadVidio = async () => {
    try {
        const response = await fetch("./data/video.json");
        const data = await response.json();

        iframe.src = "";

        btnsContainer.innerHTML = ""; 
        
        iframe.src = data[0]?.url || "";

        data.forEach((video, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-color btn-video';
            btn.textContent = video.title || `Видео ${index + 1}`;


            const  allBtns = document.querySelectorAll('.btn-video')

            btn.onclick = () => {
                iframe.src = video.url;
                allBtns.classListadd('active')
            };
            btnsContainer.appendChild(btn);
        });

    } catch (e) {
        console.log(e);
    }
};

LoadVidio();
// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

// мой JSON фаил 

const xhr = new XMLHttpRequest();

xhr.open('GET','./data/super.json',true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = () => {
    console.log(JSON.parse(xhr.responseText));
}

xhr.send();