import React, { useState } from 'react'
import AdminService from '@api/admin-service'

interface LoginFormProps {
  setAuth: Function
}

function LoginForm({ setAuth }: LoginFormProps) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const usernameHandler = (e) => setUsername(e.target.value)
  const passwordHandler = (e) => setPassword(e.target.value)
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await AdminService.login(username, password)
      if (response) {
        localStorage.setItem('token', response.data.user.token)
        setAuth(true)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="login-form">
      <form onSubmit={loginHandler} className="login-form__form">
        <input
          className="login-form__input"
          value={username}
          onChange={usernameHandler}
          placeholder="Логин"
        />
        <input
          className="login-form__input"
          value={password}
          onChange={passwordHandler}
          placeholder="Пароль"
        />
        <button className="login-form__login-button">Войти</button>
      </form>
    </div>
  )
}

export default LoginForm
