import express  from "express";
import cors from  "cors";
import gymsRoute from "./api/gyms.route.js"

const app = express()
import bodyParser from 'body-parser'

app.use(cors())
app.use(bodyParser.json())

app.use("/gyms", gymsRoute)
app.use("*", (req, res)=> res.status(404).json({error: "not found"}))
export default app