const { Router } = require('express')
const router = Router()
const JsonResponse = require('../helpers/json_response')

const RolesController = require('../controllers/roles_controller.js')
const CompaniesController = require('../controllers/companies_controller.js')

router.route('/roles')
    .get(RolesController.index)
    .post(RolesController.save)

router.route('/roles/:id')
    .get(RolesController.view)
    .delete(RolesController.destroy)
    .patch(RolesController.update)

router.route('/companies')
    .get(CompaniesController.index)
    .post(CompaniesController.save)

router.route('/companies/:id')
    .get(CompaniesController.view)
    .delete(CompaniesController.destroy)
    .patch(CompaniesController.update)

router.use((req, res, next) => {
    res.statusCode = 404
    JsonResponse(res, null)
    // next()
});
module.exports = router