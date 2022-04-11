import React from 'react'

interface ButtonProps {
  buttonText: string;
  buttonStyle: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.buttonStyle}>
       {props.buttonText} 
    </button>
  )
}

export default Button