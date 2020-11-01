import React from 'react'
import { func, node, string } from 'prop-types'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  height: ${({ theme }) => theme.sizes.buttonHeight};
  background-color: #444;
  color: #fff;
  transition: all 0.4s;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    background-color: #555;
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
