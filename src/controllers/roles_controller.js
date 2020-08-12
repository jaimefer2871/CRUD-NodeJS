const Rol = require('../models/Rol')
const RolesController = {}

RolesController.index = async (req, res) => {

    let roles = await Rol.findAll({
        include: 'Company'
    })

    return res.json({
        'error': false,
        'message': 'OK',
        'data': roles
    })
}

RolesController.save = async (req, res) => {

    let response = await Rol.create(req.body).then((item) => {
        return {
            error: false,
            message: 'OK',
            data: item
        }
    }).catch((e) => {
        return {
            error: true,
            message: 'ERROR',
            data: [],
            errors: e
        }

    })

    return res.json(response)
}

RolesController.view = async (req, res) => {

    let id = req.params['id']

    let data = await Rol.findByPk(id)

    return res.json({
        'error': false,
        'message': 'OK',
        'data': data
    })
}

RolesController.destroy = async (req, res) => {

    let id = req.params['id']

    let data = await Rol.destroy({
        where:{
            "id": id
        }
    })

    return res.json({
        'error': false,
        'message': 'OK',
        'data': data
    })
}

RolesController.update = async (req, res) => {

    let id = req.params['id']
    let body = req.body

    let data = await Rol.update(body,{
        where:{
            "id": id
        }
    })

    return res.json({
        'error': false,
        'message': 'OK',
        'data': data
    })
}



module.exports = RolesController