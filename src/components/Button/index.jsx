import React from 'react'
import { func, node, string } from 'prop-types'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  height: ${({ theme }) => theme.sizes.buttonHeight};
  background-color: #ddd;
  transition: all 0.4s;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ccc;
    transition: all ${({ theme }) => theme.others.transitionMs};;
  }
  &:active {
    transform: scale(0.99);
  }
`

function Button({ children, onClick, className }) {
  const requiredProps = {
    type: 'button',
    onClick,
    className,
  }
  return <PrimaryButton {...requiredProps}>{children}</PrimaryButton>
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
}

export default Button
