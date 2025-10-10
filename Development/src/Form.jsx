import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName:"",
    username:"",
    password:""
  });

  let handleInputChange = (event) => {
    setFormData ((currData) => {
      return {...currData, [event.target.name]:event.target.value};
    });
  };

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName:"",
      username:"",
      password:""
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
        name="fullName"
      />
      <br></br><br></br>
      <label htmlFor="username">User Name </label>{" "}
      {/* in react use htmlFor for connect input*/}
      <input
        type="text"
        id="username"
        placeholder="Enter Your UserName"
        onChange={handleInputChange}
        value={formData.username}
        name="username"
      />
      <br></br><br></br>
       <label htmlFor="password">PassWord </label>{" "}
      {/* in react use htmlFor for connect input*/}
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={formData.password}
        name="password"
      />
      <br></br><br></br>
      <button>Submit</button>
    </form>
  );
}