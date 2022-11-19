import express  from "express";
import cors from  "cors";
import resturants from "./api/resturants.route.js"
import dotenv from "dotenv"

const port = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/resturants", resturants)
app.use("*", (req, res)=> res.status(404).json({error: "not found"}))
export default app