import React, { useState } from "react";

function App() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [value, setValue] = useState("sam");
  return (
    <>
      <div className="app w-50 mx-auto border-1 shadow h-25">
        <button
          onClick={() => {
            setToggleBtn(!toggleBtn);
          }}
          className="btn btn-success "
        >
          Toggle btn
        </button>
        {toggleBtn ? (
          <p className="lead text-primary">YouTube Content</p>
        ) : (
          <p className="lead text-danger">YouTube Content</p>
        )}

        <p>Value :{value}</p>
        <input
          type="text"
          className="form-Control"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </>
  );
}

export default App;
