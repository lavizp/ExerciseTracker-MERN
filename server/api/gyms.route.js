import express from "express"

const router = express.Router()
let gyms = [
    {
        "name": "Krinagar",
        "location": "Kirtipur",
        "price": 200
    },
    {
        "name": "Titan",
        "location": "Patan",
        "price": 20000
    }
]
router.route("/").get((req,res)=> res.send("hello world"))

export default router