import { FaTrash, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Student = ({ student, onDelete, onToggle }) => {
    return (
        <div
            className='student'
            onDoubleClick={() => onToggle(student.id)}
        >
            {student.reminder === true ?
                <><div className='space'>
                    <h5>
                        {student.text}{' '}
                    </h5>
                    <p>{student.day}</p>
                    {student.attendance && <p className={'attendance_p'}>Present</p>}
                    {!student.attendance && <p className={'attendance_a'}>Absent</p>}
                </div><div className='space col-md-1'>
                        <Link to='/edit'>
                            <FaEdit
                                style={{ color: 'green', cursor: 'pointer' }} />
                        </Link>

                        <FaTrash
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => onDelete(student.id)} />
                    </div></>
                : <div></div>}
        </div>
    )
}

export default Student
