import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Test } from "./pages/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
