import axios, { AxiosError } from "axios";


/* Esto es sin axios
const personaje1 =  fetch("https://rickandmortyapi.com/api/character/2")


personaje1.then((response)=>{

    const data = response.json()
    data.then((personaje)=>{
        console.log(personaje)
    })
}).catch((error)=>{

    console.log("Error en la peticion")
})
*/

// forma correcta de hacer una llamada con axios y mostrar el resultado
const getPersonaje = async (id:number) =>{
    try{
        const personaje1 = await axios.get("https://rickandmortyapi.com/api/character/"+id)
        return personaje1.data 
    }catch(err){
        if(axios.isAxiosError(err)){
            console.log("Error de axios: "+err)
        }else{
            console.log("Error: "+err)
        }
    }
}


//const morty = await getPersonaje(1)


// si en algun momento alguno se rompe, el programa no sigue
const getCharacters = async(ids:number[])=>{
    ids.forEach(async(id) =>{
        const personaje = await getPersonaje(id)
        console.log(personaje.data)
    })
}

//onst personajes = await getCharacters([1,2,3])


const getMultipleCharacters = async(ids:number[])=>{

    const promesas = ids.map(async(id)=>
        (await axios.get("https://rickandmortyapi.com/api/character/"+id)).data
    )
    const responses = await Promise.all(promesas)
    return responses
}

/*
const personajes = getMultipleCharacters([1,2,3])
console.log(personajes)
*/


//la diferencia es que ademas te muestra si ha llegado con el status
const getSafeCharacters = async (ids:number[]) =>{
    const promesas = ids.map(async(id)=>
        (await axios.get("https://rickandmortyapi.com/api/character/"+id)).data
    )
    const responses = await Promise.allSettled(promesas)

    responses.forEach((response)=>{
        if(response.status =="fulfilled"){
            console.log(response.value)
        }else{
            console.log("Error")
        }
    })
}


getSafeCharacters([1,2,3])