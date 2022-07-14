import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ onAdd, showAdd, deleteAll }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Class List</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'deeppink' : '#9900ff'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
      <Button
          color={'deeppink'}
          text={ 'Delete'}
          onClick={deleteAll}
        />
        <Button
          color={'white'}
          text={ 'Cancel'}
          onClick={onAdd}
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Student Attendance List',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
