import Present from './present';

const PresentSTDs = ({ students, onDelete, onToggle }) => {
  return (
    <>
      {students.map((student, index) => (
        <Present key={index} student={student} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default PresentSTDs;
