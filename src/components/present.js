import { FaTrash, FaEdit } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Present = ({ student, onDelete, onToggle }) => {
  console.log(student.attendance)
  return (
    <>
      {
        student.attendance === true ? <div
        className='student'
        onDoubleClick={() => onToggle(student.id)}
      >
  
        <div className='space' >
            <h5>
          {student.text}{' '}
        </h5>
          <p>{student.day}</p>
          {student.attendance && <p className={'attendance_p'}>Present</p>}
          {!student.attendance && <p className={ 'attendance_a'}>Absent</p>}
        </div>
        <div className='space col-md-1'>
          <Link to='/edit'>
            <FaEdit
            style={{ color: '#90f', cursor: 'pointer' }}
            />
          </Link>
  
          <FaTrash
              style={{ color: 'deeppink', cursor: 'pointer' }}
              onClick={() => onDelete(student.id)}
            />
        </div>
        
      </div>:<div></div>
      }
    </>
    )
}

export default Present
