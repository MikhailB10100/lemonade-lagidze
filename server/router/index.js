const Router = require('express').Router
const router = new Router()
const AdminController = require('../controllers/admin-controller')
const UserController = require('../controllers/user-controller')

router.post('/send-application', UserController.createApplication)

router.post('/user/login', AdminController.login)
router.get('/application/get-all-applications', AdminController.getAllApplications)
router.post('/application/set-process-application', AdminController.setProcessApplication)
router.delete('/application/delete-application', AdminController.deleteApplication)
router.delete('/application/delete-all-applications', AdminController.deleteAllApplications)


module.exports = router