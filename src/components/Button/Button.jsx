import "./Button.scss"

const Button = props => {
  const {buttonText, buttonType} = props
  return (
    <button className={buttonType}>{buttonText}</button>
  )
}

export default Button