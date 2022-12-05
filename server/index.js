import app from "./server.js";
import mongodb from "mongodb"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import restaurantsDAO from "./dao/restaurantsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
        
    });
