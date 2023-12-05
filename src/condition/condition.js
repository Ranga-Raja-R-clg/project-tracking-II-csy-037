import React from "react";

function Condition({ moo }) {
  if (moo % 2 === 0) {
    return <h1>hello</h1>;
  } else {
    return <h1>world</h1>;
  }
}

export default Condition;
