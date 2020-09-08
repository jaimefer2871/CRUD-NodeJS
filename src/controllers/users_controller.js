const User = require('../models/User')
const JsonResponse = require('../helpers/json_response')
const validator = require('../helpers/validate');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config()
const UsersController = {}

UsersController.index = async (req, res) => {
    let users = await User.findAll()

    return JsonResponse(res, users)
}

UsersController.save = async (req, res) => {

    const validationRule = {
        "alias": "required|string",
        "password": "required|string",
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
            response = await User.create(req.body).then((item) => {
                return item
            }).catch((e) => {
                return e
            })
        }

        return JsonResponse(res, response)
    });
}

UsersController.view = async (req, res) => {

    let id = req.params['id']

    let data = await User.findByPk(id)

    return JsonResponse(res, data)
}

UsersController.destroy = async (req, res) => {

    let id = req.params['id']

    let data = await User.destroy({
        where: {
            "id": id
        }
    })

    return JsonResponse(res, data)
}

UsersController.update = async (req, res) => {

    let id = req.params['id']
    let body = req.body

    let data = await User.update(body, {
        where: {
            "id": id
        }
    })

    return JsonResponse(res, data)
}


UsersController.login = async (req, res) => {
    try {
        let user = req.body.alias
        let pass = req.body.password

        let userInstance = await User.findOne({
            where: {
                alias: user
            }
        });

        if (userInstance === null) {
            throw { message: 'User not found', type: 'User' }
        }

        bcrypt.compare(pass, userInstance.password, function (err, result) {
            if (result) {
                // Passwords match
                const token = jwt.sign({ id: userInstance.id, company_id: userInstance.company_id }, process.env.TOKEN_PRIVATE_KEY)
                JsonResponse(res, {
                    'access_token': token
                })
            } else {
                res.status(400)
                JsonResponse(res, err)
            }
        });
    } catch (error) {
        res.status(404)
        JsonResponse(res, {
            'message': error.message,
            'type': error.type
        })
    }

}

module.exports = UsersController