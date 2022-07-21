const joi = require('joi')

const validator = (req, res, next) => {
 
    const schema = joi.object({
        fullName: joi.string()
            .min(3)
            .max(20)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
           
            .messages({
                'string.min': 'name: min 3 characters',
                'string.max': 'name: max 20 characters'
            }),
      
        imageUser: joi.string()
          ,
          role:joi.string(),
        password: joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': '"password": min 8 characters',
                'string.max': '"password": max 30 characters'
            }),

        
            

        email: joi.string()
           .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': '"mail": incorrect format'
            }),
        from: joi.string()
            .required()
    })
    const validation = schema.validate(req.body.userData, { abortEarly: false }) // el abortEarly ejecuta una respuesta cada vez q encuentra un error

    if (validation.error) {
        return res.json({ success: false, from: 'validator', message: validation.error.details, test: validation })
    }
    next() // el metodo next pasa al controlador signup para que se ejecute 
}

module.exports = validator