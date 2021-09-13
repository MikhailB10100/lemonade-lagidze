import React, { useState } from 'react'
import InputBlock from '@components/partnership/InputBlock'
import { InputBlockProps } from '@components/partnership/interfaces'
import UserService from '@api/user-service'

const PartnershipOne = React.forwardRef((props, ref) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [text, setText] = useState<string>('')

  const inputsValuesList: InputBlockProps[] = [
    {
      header: 'Ваше имя или название организации',
      placeholder: 'Имя или название организации',
      value: name,
      setValue: setName,
    },
    {
      header: 'Ваш номер телефона',
      placeholder: 'Номер телефона',
      value: phone,
      setValue: setPhone,
    },
    {
      header: 'Ваш текст',
      placeholder: 'Текст',
      value: text,
      setValue: setText,
    },
  ]

  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await UserService.sendApplication(name, phone, text)
    if (response) alert('Заявка успешно отправлена!')
  }

  return (
    <div className="partnership" ref={ref}>
      <form className="partnership__form" onSubmit={submitHandler}>
        <header className="partnership__header">
          <p className="partnership__header-one">Стань частью истории</p>
          <p className="partnership__header-one">Заполни заявку</p>
        </header>
        <div className="partnership__inputs-block">
          {inputsValuesList.map((item) => {
            const { header, placeholder, value, setValue } = item
            return (
              <InputBlock
                key={header}
                header={header}
                placeholder={placeholder}
                value={value}
                setValue={setValue}
              />
            )
          })}
        </div>
        <button className="partnership__send-button">Отправить</button>
      </form>
    </div>
  )
})

export default PartnershipOne
