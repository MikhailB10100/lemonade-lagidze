module.exports = class ApplicationDto {
  id
  name
  phone
  text
  isDone
  date

  constructor(model) {
    this.id = model._id
    this.name = model.name
    this.phone = model.phone
    this.text = model.text
    this.isDone = model.isDone
    this.date = model.date
  }
}
