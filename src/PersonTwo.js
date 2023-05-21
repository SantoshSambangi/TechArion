import React from "react";
//import UpdatedComponent from "./HOC";
import HigherOrder from "./HigherOrder";

const PersonTwo = (props) => {

  const { money, handleIncrease } = props;

  return (
    <div>
      <h1>John is offering ${money}</h1>
      <button onClick={handleIncrease}>IncreaseMoney</button>
    </div>
  );
};

export default HigherOrder(PersonTwo);
