import { useState } from "react";

const Create = (props) => {
    console.log(props);
    
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser); // this is the data we sent in api-backend-database
    console.log("Form Submited");
  };
  return (
    <div>
      <h1>Register User.</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="full name"
        />

        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="age"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
