const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const ApiError = require('../exceptions/api-error')

class AdminService {
  async login(username, password) {
    const user = await UserModel.findOne({ username })
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким username не найден')
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль')
    }

    return {
      user
    }
  }
}

module.exports = new AdminService()
