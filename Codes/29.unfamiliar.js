//App.js
import React from "react";

function App() {
  const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];

  return <DivideBeforeConquer array={ARRAY} />;
}

const DivideBeforeConquer = ({ array }) => {
  const middle = Math.floor(array.length / 2);
  const slice1 = array.slice(0, middle);
  const slice2 = array.slice(middle);

  const centeredRow = {
    display: "flex",
    fontSize: 30,
    justifyContent: "center",
  };
  const centerdColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
  };

  return (
    <>
      <p style={centeredRow}>{`[${array.toString()}]`}</p>
      {array.length !== 1 && (
        <div style={centeredRow}>
          <div style={centerdColumn}>
            <DivideBeforeConquer array={slice1} />
          </div>
          <div style={centerdColumn}>
            <DivideBeforeConquer array={slice2} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
