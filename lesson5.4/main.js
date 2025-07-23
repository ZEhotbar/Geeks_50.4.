// // деструктуризация - когда ключи вытаскивам как констату

// // const object = {
// //     key1: "value1",
// //     key2: "value2",
// //     key3: "value3",
// // }

// // object.key1 = "value1_ed"
// // console.log(object.key1)


// // const {key1,key2,key3} = object;
// // console.log(key1, key2, key3)

// const render = (product) => {
//     const { name, price } = product;
//     const producTBlock = document.createElement("div");

//     producTBlock.innerHTML = `
//         <h2>Name: ${name}</h2>
//         <p>Price: ${price}</p>
//     `;
//     producTBlock.classList.add('product')
//     document.body.appendChild(producTBlock);
//     console.log(`Name: ${name}\nPrice: ${price} som`);
// };

// // setTimeout(() => {
// //     const product = {
// //         name: "Milk",
// //         price: 87
// //     };

// //     render(product);

// //     setTimeout(() => {
// //         product.name = 'Cola';      
// //         product.price = 120;
// //         render(product);
// //     }, 1200);

// // }, 1000); 


// //Product - Обещания 

// //Promsie --> pending --> fullfilled || rejected

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: "Baklajan",
//             price: 130 
//         };
//         render(product);
//         resolve(product); 
//     }, 1200);
// }).then((product) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 product.name = "Ogurez";
//                 product.price = 2200;
//                 render(product);
//                 resolve(product);
//             }, 1200);
//         });
//     }, () => {
//         console.log("reject");
//     })
//     .then((product) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 product.name = "Gribocks";
//                 product.price = 120;
//                 render(product);
//                 resolve(product);
//             }, 1200);
//         });
//     }, () => {
//         console.log("reject2");
//     })
//     .then((product) => {
//         // можно продолжить цепочку
//         console.log("Цепочка завершена:", product);
//     });



//api  -Application Programing Inteface
// Link  - сылка 
// API = LINK
// ENDPOINT - Конечная точка 

// https://jsonplaceholder.typicode.com/todos
// https:// - PROTOCOL 
// jsonplaceholder.typicode.com  - DOMEN
// /todos - ENDPOINT 

const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((respons) => {
    console.log(respons.json())
    .then(() =>{
        data.forEach(item =>{
            console.log(data);
        })
        
    })
    
})

