
const personaje1 =  fetch("https://rickandmortyapi.com/api/character/2")


personaje1.then((response)=>{

    const data = response.json()
    data.then((personaje)=>{
        console.log(personaje)
    })
}).catch((error)=>{

    console.log("Error en la peticion")
})