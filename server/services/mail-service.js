const nodemailer = require('nodemailer')

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  async sendRequest(name, phone, text) {
    const contain = text ? `<h3>Содержимое: </h3><p>${text}</p>` : ''
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      // to: process.env.COMPANY_MAIL,
      to: 'klevak322@gmail.com',
      subject: 'Новая заявка Лимонад Лагидзе',
      text: '',
      html: `
        <div>
          <h1><strong>${name}</strong> оставил(-а) новую заявку </h1>
          <p>Телефон: <a href='tel:${phone}'>${phone} </a></p>
          ${contain}
        </div>
      `,
    })
  }
}

module.exports = new MailService()
