import React from "react";

//views
import Screen from "./views/screen";

function App() {
  const APIKEY: string = "0af307742b6056f5d5bd003cdfe9d639";

  return (
    <div>
      <Screen APIKEY={APIKEY} />
    </div>
  );
}

export default App;
