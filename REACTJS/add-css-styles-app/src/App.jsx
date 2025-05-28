import Student from './Student.jsx'

function App() {
    return(
      <>
          <Student name="Spongebob" age={30} isStudent={true}/>
          <Student name="Patrick" age={42} isStudent={false}/>
      </>
    )
}

export default App
