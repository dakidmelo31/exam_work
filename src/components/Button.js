import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: color=="white"? "black": "white" }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: '#9900ff',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
