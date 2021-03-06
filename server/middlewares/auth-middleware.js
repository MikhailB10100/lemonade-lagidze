const ApiError = require('../exceptions/api-error')
const UserService = require('../services/user-service')

module.exports = async function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData = await UserService.checkToken(accessToken)
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }

    next()
  } catch (e) {
    return next(ApiError.UnauthorizedError())
  }
}
