import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"


dotenv.config()

//connection to the db
conn()

const app = express()
const port = process.env.PORT

//template engine
app.set("view engine", "ejs")

//static files middleware
app.use(express.static('public'))

//routes
app.use('/', pageRoute)

// app.get('/', (req,res) => {
//     res.render('index')
// })

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

