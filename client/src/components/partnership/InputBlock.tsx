import React, { useState } from 'react'
import { InputBlockProps } from '@components/partnership/interfaces'

function InputBlock({ header, placeholder, value, setValue }: InputBlockProps) {
  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="partnership__input-block">
      <header className="partnership__input-header">{header}</header>
      <input
        value={value}
        onChange={valueHandler}
        className="partnership__input"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputBlock
