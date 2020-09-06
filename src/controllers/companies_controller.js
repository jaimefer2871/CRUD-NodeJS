const Company = require('../models/Company')
const JsonResponse = require('../helpers/json_response')
const validator = require('../helpers/validate');
const CompaniesController = {}

CompaniesController.index = async (req, res) => {
    let companies = await Company.findAll()

    return JsonResponse(res, companies)
}

CompaniesController.save = async (req, res) => {

    const validationRule = {
        "name": "required|string",
        "abrev": "required|string",
        "email": "required|email"
    }

    validator(req.body, validationRule, {}, async (err, status) => {
        let response = null

        if (!status) {
            res.status(422);
            response = err;
        }
        else {
            res.status(200);
            response = await Company.create(req.body).then((item) => {
                return item
            }).catch((e) => {
                return e
            })
        }

        return JsonResponse(res, response)
    });
}

CompaniesController.view = async (req, res) => {

    let id = req.params['id']

    let data = await Company.findByPk(id)

    return JsonResponse(res, data)
}

CompaniesController.destroy = async (req, res) => {

    let id = req.params['id']

    let data = await Company.destroy({
        where: {
            "id": id
        }
    })

    return JsonResponse(res, data)
}

CompaniesController.update = async (req, res) => {

    let id = req.params['id']
    let body = req.body

    let data = await Company.update(body, {
        where: {
            "id": id
        }
    })

    return JsonResponse(res, data)
}


module.exports = CompaniesController