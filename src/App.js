import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AddStudent from './components/AddStudent'
import About from './components/About'
import Students from './components/students'
import StdList from './components/listStudents'
import Button from './components/Button.js'
import Present from './components/present'
import PresentSTDs from './components/presentSTDs'
import AbsentSTDs from './components/absentSTDs'


const App = () => {
  const [showAddstudent, setShowAddStudent] = useState(false)
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents()
      setStudents(studentsFromServer)
    }

    getStudents()
  }, [])

  // Fetch students
  const fetchStudents = async () => {
    const res = await fetch('http://localhost:5000/students')
    const data = await res.json()

    return data
  }

  // Fetch student
  const fetchstudent = async (id) => {
    const res = await fetch(`http://localhost:5000/students/${id}`)
    const data = await res.json()

    return data
  }

  // Add student
  const addstudent = async (student) => {
    const res = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(student),
    })

    const data = await res.json()

    setStudents([...students, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newstudent = { id, ...student }
    // setStudents([...students, newstudent])
  }

  // Delete student
  const deletestudent = async (id) => {
    const res = await fetch(`http://localhost:5000/students/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setStudents(students.filter((student) => student.id !== id))
      : alert('Error Deleting This student')
  }

  // Delete student
  const deleteallstudent = async () => {
    const res = await fetch(`http://localhost:5000/students`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200?setStudents([]):alert('Error Deleting')
  }

  //Updating a student
  const updateStudent = async (id) => {
    const res = await fetch(`http://localhost:5000/students/${id}`, {
      method: 'PUT',
    })
    res.status === 200
      ? setStudents(students.filter((student) => student.id !== id))
      : alert('Error Updating This student')
  }

  // Toggle Attendance
  const toggleAttendance = async (id) => {
    const studentToToggle = await fetchstudent(id)
    const updstudent = { ...studentToToggle, attendance: !studentToToggle.attendance }

    const res = await fetch(`http://localhost:5000/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updstudent),
    })

    const data = await res.json()

    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, attendance: data.attendance } : student
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddStudent(!showAddstudent)}
          showAdd={showAddstudent}
          deleteAll={()=>deleteallstudent()}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddstudent && <AddStudent onAdd={addstudent} />}
                {students.length > 0 ? (
                  <>
                    <Students
                      students={students}
                      onDelete={deletestudent}
                      onToggle={toggleAttendance}
                    />
                    <div className="myBtns">
                      <Link to='/presentSTDs'>
                        <Button
                          color={'#90f'}
                          text={'Presnt Students'}
                        />
                      </Link>
                      <Link to='/absentSTDs'>
                        <Button
                          color={'deeppink'}
                          text={'Absent Students'}
                        />
                      </Link>
                    </div>
                  </>
                ) : (
                  'No students To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/stds' element={<StdList />} />
          <Route path='/presentSTDs' element={<PresentSTDs students={students}
            onDelete={deletestudent}
            onToggle={toggleAttendance} />} />
          <Route path='/absentSTDs' element={<AbsentSTDs students={students}
            onDelete={deletestudent}
            onToggle={toggleAttendance} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
