import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({           // useState Define as a object
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };        //currDAta is Spread And  target.name = fullName 
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name </label>{" "}
      {/* in react use htmlFor for connect input*/}
      <input
        type="text"
        id="fullname"
        placeholder="Enter Your Full Name"
        onChange={handleInputChange}
        value={formData.fullName}           
        name="fullName"               // check here by target.name
      />
      <br></br>
      <br></br>
      <label htmlFor="username">User Name </label>{" "}
      {/* in react use htmlFor for connect input*/}
      <input
        type="text"
        id="username"
        placeholder="Enter Your UserName"
        onChange={handleInputChange}
        value={formData.username}
        name="username"            // check here by target.name
      />
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord </label>{" "}
      {/* in react use htmlFor for connect input*/}
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={formData.password}
        name="password"                     // check here by target.name
      />
      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
}
