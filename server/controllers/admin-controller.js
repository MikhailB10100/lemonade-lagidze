const UserService = require('../services/user-service')
const ApplicationService = require('../services/application-service')

class AdminController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body
      const userData = await UserService.login(username, password)
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async logout(req, res, next) {
    try {
      const { authorization } = req.headers
      const token = authorization.split(' ')[1]
      const result = await UserService.logout(token)
      return res.json(result)
    } catch (e) {
      next(e)
    }
  }

  async getAllApplications(req, res, next) {
    try {
      const applications = await ApplicationService.getAllApplications()
      return res.json(applications)
    } catch (e) {
      next(e)
    }
  }

  async deleteApplication(req, res, next) {
    try {
      const { id } = req.body
      const application = await ApplicationService.deleteApplication(id)
      return res.json(application)
    } catch (e) {
      next(e)
    }
  }

  async deleteAllApplications(req, res, next) {
    try {
      const message = await ApplicationService.deleteAllApplications()
      return res.json(message)
    } catch (e) {
      next(e)
    }
  }

  async setProcessApplication(req, res, next) {
    try {
      const { id, status } = req.body
      const application = await ApplicationService.setProcessApplication(
        id,
        status
      )
      return res.json(application)
    } catch (e) {
      next(e)
    }
  }

  async registration(req, res, next) {
    try {
      const { username, password } = req.body
      const user = await UserService.registration(username, password)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }

  async checkToken(req, res, next) {
    try {
      const { token } = req.body
      const user = await UserService.checkToken(token)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new AdminController()
