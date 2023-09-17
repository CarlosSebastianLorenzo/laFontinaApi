const isAlreadyExists = (Model, key, value) => async (req, res, next) => {

    const Exists = await Model.findOne({ [key]: req.body[value] });
    
    if(!Exists){
        return next()
    }

    return res.status(409).json({
        success: false, 
        error: 'The '+ value +' is already in use. Please choose another one.'
    })

}

export default isAlreadyExists