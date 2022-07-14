import Student from './Student'

const Students = ({ students, onDelete, onToggle }) => {
  return (
    <>
      {students.map((student, index) => (
        <Student key={index} student={student} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Students;
