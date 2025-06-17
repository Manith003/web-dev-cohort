import React from "react";

const App = () => {
  //js ka logic

  // non parameterized function
  const handleClick = () => {
    alert("button clicked");
  };
  const handleParameterizedClick = (param) => {
    alert(param);
  };
  

  return (
    <>
      {1 + 2}
      <div>hello</div>
      <div>world</div>
      <button onClick={handleClick}>click</button>
      <button
        onClick={() => handleParameterizedClick("hi manith how are you?")}
      >
        click(parameterized)
      </button>
    </>
  );
};

export default App;

// function call is replaced by it's return value;
// a function component will always return HTML

//we can not write anyhing after return
//we can onlyt return single data/entity/variable/value
//there must be single return in a function and that must be the last statement
