import React from 'react'
import { string, func, node } from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-direction: column;
`
const LabelText = styled.span`
  font-size: 16px;
  margin-bottom: 2px;
`
const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: 2px;
`
const StyledInput = styled.input`
  height: ${({ theme }) => theme.sizes.inputHeight};
  box-sizing: border-box;
  border: 1px solid ${({ theme: { colors }, isError }) => (isError ? colors.error : colors.text)};
  font-size: 16px;
  padding: 0 15px;
`

function Input({
  label, formName, name, value, onChange, error = '', className, ...rest
}) {
  const id = `${formName}-${name}`
  const handleChange = (e) => onChange && onChange(e.target.value)

  return (
    <Label htmlFor={id} className={className}>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput
        isError={!!error}
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Label>
  )
}

Input.propTypes = {
  label: node,
  error: string,
  name: string.isRequired,
  formName: string.isRequired,
  value: string,
  className: string,
  onChange: func,
}

export default Input
