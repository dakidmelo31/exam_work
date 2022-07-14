import { FaTrash } from 'react-icons/fa'
// import {Link} from 'react-router-dom'

const Student = ({ student, onDelete, onToggle }) => {
  console.log(student.attendance)
  return (
    <>{student.attendance ?
       <div
       className='student attendance_a'
        onDoubleClick={() => onToggle(student.id)}
      >
        <div className=''>

        <div className='space' >
            <h6>
          {student.text}{': '}{student.day}
        </h6>
        </div>
        <div className='space col-md-1'>
          
  
          <FaTrash
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(student.id)}
            />
        </div>
        
      </div>
        </div>
    :  <div
    className='student attendance_p'
    onDoubleClick={() => onToggle(student.id)}
  >
    <div className='space' >
        <h6>
      {student.text}{': '}{student.day}
    </h6>
      
    </div>
    <div className='space col-md-1'>
      

      <FaTrash
          style={{ color: '#90f', cursor: 'pointer' }}
          onClick={() => onDelete(student.id)}
        />
    </div>
    
  </div>
    }
    </>
    )
}

export default Student
