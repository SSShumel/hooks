import React, { useState } from "react";
import hello from "./examples/Effect.jsx";
import UseStateEx from "./examples/State.jsx";
import UseEffectEx from "./examples/Effect.jsx";
import UseRefEx from "./examples/Ref.jsx";
import Memo from "./examples/Memo.jsx";
import Callback from "./examples/Callback.jsx";
import Main from "./main.jsx";
import Alert from "./alert.jsx";
function App() {

  return (
    <div className="App">
      <Alert/>
      <Main/>
      
    </div>
  );
}

export default App;
