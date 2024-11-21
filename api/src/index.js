import mongoose from "mongoose"
import app from "./app";

async function main() {
    try{
        await mongoose.connect("")
        console.log("Coneccion exitosa a la bd")
        app.listen(4000,()=>{
            console.log("Aplicacion iniciada con exito")
        })
    } catch(error){
        console.log("Algo sali mal", error)
    }
}
main()