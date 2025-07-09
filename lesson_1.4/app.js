// //flags 
// // i - ignore case
// //g - global
// // m - multiline 
// //

// // const name2 = prompt();

// // const regExp  = /d/gi

// // console.log(name2.match(regExp))


// const numbers = '0123456789'

// const regExp2 = /\w/g    

// console.log(numbers.match(regExp2))


let numbers = 0;
const count = () => {
    numbers++;
    console.log(numbers);
    if (numbers < 600) {
        count()
    }
}

count()
