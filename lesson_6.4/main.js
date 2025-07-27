//mock API
// API: https://6884aecb745306380a390b27.mockapi.io/characters

// async await, try catch  
// PSOT , PUT , 
const API = 'https://6884aecb745306380a390b27.mockapi.io/characters'

const getBtn = document.querySelector('#get');
const postBtn = document.querySelector('#post')
const putBtn = document.querySelector('#put')
const deleteBtn = document.querySelector('#delete')

const createInput = document.querySelector('#create')
const characterIdInput = document.querySelector('#characterID')

//get
const getAllCharacters =  async () => {
    const response = await fetch(API)
    const data =  await response.json()
    console.log(data);
}

//post 
const postCharacters = async () => {
    await fetch(API, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            name: createInput.value
        })
    })
    console.log(JSON.stringify({name: createInput.value}));
    
}
//put 
const putCharacters = async () => {
    await fetch (`${API}/${characterIdInput.value}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name : createInput.value
        })
    })
}
//delete

const deleteCharacter = async () => {
    await fetch(`${API}/${characterIdInput.value}`, {
        method: 'DELETE'
    })
}

getBtn.onclick = getAllCharacters
postBtn.onclick = postCharacters
putBtn.onclick = putCharacters
deleteBtn.onclickfff = deleteCharacter