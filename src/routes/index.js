const { Router } = require('express')
const router = Router()

router.use('/api', require('./api'));
router.use('/web', require('./web'));

module.exports = router;