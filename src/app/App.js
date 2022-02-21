import React from "react";
import EqMap from "./pages/EqMap";
import { EqDataProvider } from "./handlers/eqDataHandler";
import Template from "./reusables/template";

function App() {
  return (
    <EqDataProvider>
      <Template>
        <EqMap />
      </Template>
    </EqDataProvider>
  );
}

export default App;
