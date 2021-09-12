const ApplicationService = require('../services/application-service')

class UserController {
  async createApplication(req, res, next) {
    try {
      const { name, phone, text } = req.body
      const userData = await ApplicationService.createApplication(name, phone, text)
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()
