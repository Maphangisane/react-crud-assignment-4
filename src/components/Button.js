//Imports
import PropTypes from 'prop-types'

// Definitions
const Button = ({color, name, onClick}) => {
    
// Returns
  return (
        <button 
            onClick= {onClick} //event function
            style={{backgroundColor:color}} 
            className="btn" 
        >
                {name}
        </button>
  )
}
// Default values
Button.defaultProps = {
    color: 'steelblue',
    name: 'Add Member',
}
//Proptypes
Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
//Exports
export default Button