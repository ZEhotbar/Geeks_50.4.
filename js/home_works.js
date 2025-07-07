// email gmail and red bliock 

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

const cube = document.querySelector('.child_block')

let numbers = 0;

const move_numb = () => {
    if (numbers >= 449) return;
    numbers++;      
    cube.style.left = numbers + "px";
    requestAnimationFrame(move_numb);
}
move_numb();
