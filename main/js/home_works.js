// email gmail and red bliock 
 //интрополяция 
 //контенация строк = numbers + "px";

const gmail_inp = document.querySelector('#gmail_input');
const gmail_BTN = document.querySelector('#gmail_button');
const gmail_chek = document.querySelector('#gmail_result');


const regEXP = /^\w{3,}@(gmail|mail|icloud)\.com$/ 


const gmail_Test = () => {
    if (regEXP.test(gmail_inp.value))
        {
            gmail_chek.textContent = "Ok";
            gmail_chek.style.color = "green";
    }
    else{
        gmail_chek.textContent = "ERROR";
        gmail_chek.style.color = "red"
    }
}

gmail_BTN.onclick = (gmail_Test);


//part(2)

const cube = document.querySelector('.child_block');
const parent_cube = document.querySelector('.parent_block');
const offsetWindth = parent_cube.clientWidth - cube.clientWidth;
const  offsetHidgt = parent_cube.clientHeight - cube.clientHeight; 

let positionX = 0;
let positionY = 0;

const move_numb = () => {
    if (positionX < offsetWindth && positionY === 0) {
        positionX++;
    } else if (positionX >= offsetWindth && positionY < offsetHidgt) {
        positionY++;
    }else if (positionY >= offsetHidgt && positionX > 0){
        positionX--;
    } else if (positionX === 0 && positionY > 0){
        positionY --;
    }

    
    cube.style.left = `${positionX}px`; 
    cube.style.top = `${positionY}px`;
    requestAnimationFrame(move_numb);
}
move_numb();



// homwork 2

const interval_second = document.querySelector('#seconds');
const btn_Start = document.querySelector('#start');
const btn_Stop = document.querySelector('#stop');
const btn_Restart = document.querySelector('#reset');

let tim_second = 0;
let  interval; 

btn_Start.onclick = (() =>{
    clearInterval(interval);
    interval = setInterval(()=>{
        tim_second++;
        interval_second.innerHTML = tim_second;
    },1000);
})

btn_Stop.onclick =(()=>{
    clearInterval(interval);
})

btn_Restart.onclick = (()=>{
    clearInterval(interval);
    tim_second = 0;
    interval_second.innerHTML = tim_second;
})

