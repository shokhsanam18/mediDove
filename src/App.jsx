import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavigationMenuDynamic } from "./pages/Test";
import { LayoutTest } from "./components/layoutTest";
import { Tasischilar } from "./pages/About/Tasischilar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutTest />} />
        <Route path="Test" element={<NavigationMenuDynamic />} />
        <Route path="Tasischilar" element={<Tasischilar />} />
      </Routes>
    </div>
  );
}

export default App;
