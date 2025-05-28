import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    
    

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    } 

    const resetAge = () => {
        setAge(0);
    }


    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment age</button>
                <br></br><button onClick={resetAge}>Reset Age</button>

                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Set employment</button>


            </div>)
}

export default MyComponent