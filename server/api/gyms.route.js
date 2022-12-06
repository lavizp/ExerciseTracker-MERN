import express from "express"

const router = express.Router()
let gyms = [
    {
        "name": "Krinagar",
        "location": "Kirtipur",
        "price": 200,
        "id": 1
    },
    {
        "name": "Titan",
        "location": "Patan",
        "price": 20000,
        "id": 2
    }
]
router.route("/").get((req,res)=> res.send(gyms))

router.route("/:id").get((req,res)=>{
    let id = req.params.id;
    res.send(gyms.filter((item)=>{
        return item.id == id;
    }))
})

router.route("/").post((req,res)=>{
    console.log(req.body)
    gyms.push(req.body)
    res.send("D0ne hai ta")
})
export default router