import React from 'react'

interface ButtonProps {
  buttonText: string;
  buttonStyle: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={props.buttonStyle}>
       {props.buttonText} 
    </button>
  )
}

export default Button