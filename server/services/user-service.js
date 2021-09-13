const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const ApiError = require('../exceptions/api-error')

class UserService {
  async login(username, password) {
    const user = await UserModel.findOne({ username })
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким username не найден')
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль')
    }

    const newUser = await this.updateToken(user.token)

    return {
      user: newUser,
    }
  }

  async logout(token) {
    const user = await UserModel.findOneAndUpdate(
      { token },
      {
        $set: {
          token: '',
        },
      }
    )
    return { message: 'success' }
  }

  async checkToken(token) {
    const user = await UserModel.findOne({ token })
    if (!user) {
      throw ApiError.UnauthorizedError()
    }
    return { user }
  }

  async updateToken(token) {
    const newToken = uuid.v4()
    await UserModel.findOneAndUpdate(
      { token },
      {
        $set: {
          token: newToken,
        },
      }
    )
    return { token: newToken }
  }
}

module.exports = new UserService()
