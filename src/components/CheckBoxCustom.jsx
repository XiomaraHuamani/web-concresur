import React from 'react'

const CheckBoxCustom = ({ label, name, isChecked, handleChecked, classCheck = '', classCheckmark = '' }) => {
  return (
    <label className={`checkboxContainer ${classCheck}`}>
      {label}
      <input type="checkbox" name={name} checked={isChecked} onChange={handleChecked} />
      <span className={`checkmark ${classCheckmark}`}></span>
    </label>
  )
}

export default CheckBoxCustom
