import $api from '@http/index'

export default class AdminService {
  static async login(email: string, password: string) {
    return $api.post('/auth/login', { email, password })
  }

  static async logout() {
    return $api.get('/auth/logout')
  }

  static async setProcessApplication(id: string, status: boolean) {
    return $api.post('/application/set-process-application', { id, status })
  }

  static async getAllApplications() {
    return $api.get('/application/get-all-applications')
  }

  static async deleteApplication(id: string) {
    return $api.delete('/application/delete-application', { data: { id } })
  }

  static async deleteAllApplications() {
    return $api.delete('/application/delete-all-applications')
  }
}
