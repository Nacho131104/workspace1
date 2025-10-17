import express from "express";
import cors from "cors";



type Persona ={
    id:number
    name: string,
    surname: string,
    age: number
}


const personas : Persona[] =[
    {id:1,name:"Pedro",surname:"Lopez",age:18},
    {id:2,name:"Pedro",surname:"Lopez",age:18},
    {id:3,name:"Pedro",surname:"Lopez",age:18}
]
//esto es nuestro servidor
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())



app.get("/",(req,res)=>{res.send("Okey makey")} // send porque vale con texto plano
)

app.get("/persons",(req,res)=>{res.json(personas)}) //el json para indicar que es un json



app.post("/person",(req,res)=>{

    //asigna el id a la fecha de ahora y el resto al body introducido en postman
    const user: Persona ={
        id: Date.now(),
        ...req.body
    }
    personas.push(user)
    res.status(201).json(user) // añado la nueva persona
})


app.put("/person/:id",(req,res)=>{
    const id = req.params.id
})
//para lanzar el servidor
app.listen(port, ()=>{console.log("Server started at port"+port)})
