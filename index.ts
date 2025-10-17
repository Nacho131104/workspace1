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


const morty = await getPersonaje(1)