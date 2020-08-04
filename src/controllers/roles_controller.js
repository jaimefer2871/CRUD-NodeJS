
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
    // db.all('select * from base_rol', [], (err, rows) => {
    //     if (err) {
    //         throw err;
    //     }
    //     let data_rows = []

    //     rows.forEach((row) => {
    //         data_rows.push({
    //             'name': row.name,
    //             'abrev': row.abrev,
    //             'description': row.description,
    //             'created_at': row.created_at
    //         })
    //     });
    //     res.json({
    //         'error': false,
    //         'message': 'OK',
    //         'data': data_rows
    //     })
    // })
}


module.exports = RolesController