import Photo from "../models/photoModel.js"

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body)
        res.status(201).json({
            succeded: true,
            photo
        })
    }    
    catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}
export { createPhoto }