import express  from "express";
import cors from  "cors";
import resturants from "./api/resturants.route.js"

const app = express()
import bodyParser from 'body-parser'

app.use(cors())
app.use(bodyParser.json())

app.use("/api/v1/resturants", resturants)
app.use("*", (req, res)=> res.status(404).json({error: "not found"}))
export default app