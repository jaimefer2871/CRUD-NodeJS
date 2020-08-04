const { Router } = require('express')
const router = Router()

const RolesController = require('../controllers/roles_controller.js')
const CompaniesController = require('../controllers/companies_controller.js')

router.route('/roles')
    .get(RolesController.index)

router.route('/companies')
    .get(CompaniesController.index)

module.exports = router