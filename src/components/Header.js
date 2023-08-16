// Imports
import PropTypes from 'prop-types'
import Button from './Button'

// Definitions
// const Header = ({title}) => {
const Header = ({ title, onAdd, showAdd }) => {

//Returns
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
            color= {showAdd ? 'red' : 'green'}
            text= {showAdd ? 'Close' : 'Add'} 
            onClick= {onAdd} 
         />
    </header>
  )
}

Header.defaultProps = {
    title: 'Member'
}
// Proptypes -built in type system (impt) 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Exports
export default Header