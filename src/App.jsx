import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Test } from "./pages/Test";
import { LayoutTest } from "./components/layoutTest";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Button>Dynamic button</Button>
      <div>
        <Routes>
          <Route path="/" element={<LayoutTest />} />
          <Route path="Test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
