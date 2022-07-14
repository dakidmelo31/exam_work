import Absent from './absent';

const AbsentSTDs = ({ students, onDelete, onToggle }) => {
  return (
    <>
      {students.map((student, index) => (
        <Absent key={index} student={student} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default AbsentSTDs;
