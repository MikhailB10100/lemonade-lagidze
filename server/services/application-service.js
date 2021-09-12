const ApplicationModel = require('../models/application-model')
const MailService = require('./mail-service')
const ApplicationDto = require('../dtos/application-dto')
const ApiError = require('../exceptions/api-error')

class ApplicationService {
  checkPhoneNumber(phone) {
    const { length } = phone
    if (
      !(phone.startsWith('+7') && length === 12) &&
      !((phone.startsWith('8') || phone.startsWith('7')) && length === 11) &&
      !(phone.startsWith('9') && length === 10)
    ) {
      throw ApiError.BadRequest('Incorrect phone number')
    }
  }

  async createApplication(name, phone, text) {
    this.checkPhoneNumber(phone)

    const application = await ApplicationModel.create({
      name,
      phone,
      text,
      date: Date.now(),
    })
    const applicationDto = new ApplicationDto(application)
    await MailService.sendRequest(name, phone, text)
    return { application: applicationDto }
  }

  async setProcessApplication(id, status) {
    const application = await ApplicationModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          isDone: !status,
        },
      },
      { new: true }
    )
    const applicationDto = new ApplicationDto(application)
    return { application: applicationDto }
  }

  async getAllApplications() {
    const applications = await ApplicationModel.find()
    const applicationsDto = applications.map((item) => new ApplicationDto(item))
    return { applications: applicationsDto }
  }

  async deleteApplication(id) {
    await ApplicationModel.findByIdAndDelete({ _id: id })
    return { id }
  }

  async deleteAllApplications() {
    await ApplicationModel.deleteMany({})
    return { message: 'success' }
  }
}
module.exports = new ApplicationService()
