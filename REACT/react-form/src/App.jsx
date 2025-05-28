import { useState } from "react";
import './App.css';
import FormInput from './components/FormInput.jsx';

const App = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirm:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"E-mail",
      label:"E-mail"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"birdthday",
      label:"birthday"
    },
    {
      id:4,
      name:"password",
      type:"text",
      placeholder:"password",
      label:"password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"text",
      placeholder:"confirmPassword",
      label:"confirmPassword"
    }
    
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.value]: e.target.value});
  }

  return (
  <div className="app">
    <form onSubmit={handleSubmit} className="form">
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[innput.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
    </form>
  </div>
)}

export default App;
