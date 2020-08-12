const Company = require('../models/Company')
const CompaniesController = {}

CompaniesController.index = async (req, res) => {
    let companies = await Company.findAll()

    return res.json({
        'error': false,
        'message': 'OK',
        'data': companies
    })
}

CompaniesController.add = async(req, res) => {
    
}


module.exports = CompaniesController