import $api from '@http/index'

export default class UserService {
  static async sendApplication(name: string, phone: string, text: string) {
    return $api.post('/user/send-application', { name, phone, text })
  }
}
