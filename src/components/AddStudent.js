import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [attendance, setAttendance] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, attendance })

    setText('')
    setDay('')
    setAttendance(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Matricule Number</label>
        <input
          type='text'
          placeholder='Add Matricule Number...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Attendance</label>
        <input
          type='checkbox'
          checked={attendance}
          value={attendance}
          onChange={(e) => setAttendance(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Add Student' className='btn btn-block' />
    </form>
  )
}

export default AddTask
