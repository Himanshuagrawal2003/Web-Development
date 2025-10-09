import {useState} from 'react'

export default function Form(){
    let [formName, setFormName] = useState("");

    let handleNameChange = (event) => {
        setFormName(event.target.value);
    };

    return (
    <form>
        <label htmlFor='username'>Full Name  </label>
        <input type="text" id='username' placeholder="Enter Your Name" onChange={handleNameChange} value={formName} />
        <button>Submit</button>
    </form>
    );
}