import {useState} from 'react'

export default function Form(){
    let [formName, setFormName] = useState("");

    let handleNameChange = (event) => {
        setFormName(event.target.value);
    };

    return (
    <form>
        <input type="text" placeholder="Enter Your Name" onChange={handleNameChange} value={formName} />
        <button>Submit</button>
    </form>
    );
}