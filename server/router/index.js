const Router = require('express').Router
const router = new Router()
const AdminController = require('../controllers/admin-controller')
const UserController = require('../controllers/user-controller')
const AuthMiddleware = require('../middlewares/auth-middleware')

router.post('/user/send-application', UserController.createApplication)

router.post('/auth/login', AdminController.login)
// router.post('/auth/registration', AdminController.registration)
router.get('/auth/logout', AdminController.logout)
router.post('/auth/refresh', AdminController.checkToken)
router.get(
  '/application/get-all-applications',
  AuthMiddleware,
  AdminController.getAllApplications
)
router.post(
  '/application/set-process-application',
  AuthMiddleware,
  AdminController.setProcessApplication
)
router.delete(
  '/application/delete-application',
  AuthMiddleware,
  AdminController.deleteApplication
)
router.delete(
  '/application/delete-all-applications',
  AuthMiddleware,
  AdminController.deleteAllApplications
)

module.exports = router
