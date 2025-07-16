//JSON -JavaScript objectnatation

//.json - формат файла 

console.log(JSON.parse('123'));
console.log(321);

const user = {
    name: "David",

    age: "18"
}


console.log(JSON.stringify(user))

//MP - mulyi page application
//SPA single page application
//XML - eXtensible Marcap Language 
//HTML - Hypertext Markup Landuage

//XML --> JSON 

//HTTP  - HyperText Transfer Protocl 
//HTTPS  - HyperText Transfer Protocl Secure


// XHR - XML Http Request 

const button = document.querySelector('button')

button.onclick = () => 
{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','data.json') // 2 . указания метода и пути 
    xhr.setRequestHeader('Content-type','application/json') // 3 Установка заголовка запроса
    xhr.send() //4 Отправка запроса 

    xhr.onload = ( ) => {
        const data = JSON.parse(xhr.response)
        document.querySelector('.name').innerText = data.name   
        document.querySelector('.age').innerText = data.age
    }
}
