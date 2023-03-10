import mongoose from "mongoose"

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'lenslight-db',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to the db successfully")
    }).catch((err)=>{
        console.log(`Db connection error: ${err}`)
    })
}

export default conn