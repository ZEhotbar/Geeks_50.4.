// синхроный код 

// console.log(1);
// console.log(2);
// console.log(3);
// асинхроный код

// setTimeout( ()=> {
//     console.log('Адин')
// });
// console.log('Двыа');


const interval = setInterval(()=> {
    console.log("Okak");
},1000)
setTimeout(()=>{
    clearInterval(interval);
},5000) 

//chaeacters -персонажи 


const chaeacters = [
    {
        name:  'АДмн',
        age: '14',
    },
    {
        name: 'Лера',
        age:  '88'
    },
    {
        photo: "https://avatars.githubusercontent.com/u/1504415?v=4",
        name: 'Тэри',
        age: '2'
    }
    ];
    
    const arr = ['Адин','ДЫва','Тэри','Чотыре']

chaeacters.forEach((item)=> {
    const block = document.createElement("div")
    block.setAttribute('class','block')

    const deff = "https://avatars.mds.yandex.net/i?id=ef8595a6087d2a4e7452d0e276ae5732d94a01d5-4719838-images-thumbs&n=13"

    block.innerHTML = `
    <div class = "block_photo">
        <img src = "${item.photo || deff }" alt = "${item.name}">
    </div>
    <h3>${item.name}</h2>
    <span>${item.age}</span>
    `

    document.body.append(block)
})

