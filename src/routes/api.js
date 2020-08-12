const { Router } = require('express')
const router = Router()

const RolesController = require('../controllers/roles_controller.js')
const CompaniesController = require('../controllers/companies_controller.js')
const Rol = require('../models/Rol.js')

router.route('/roles')
    .get(RolesController.index)
    .post(RolesController.save)

router.route('/roles/:id')
    .get(RolesController.view)
    .delete(RolesController.destroy)
    .patch(RolesController.update)

router.route('/companies')
    .get(CompaniesController.index)

module.exports = router