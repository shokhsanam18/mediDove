import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavigationMenuDynamic } from "./pages/Test";
import { LayoutTest } from "./components/layoutTest";
import { Tasischilar } from "./pages/About/Tasischilar";
import { Details } from "./pages/Surgery-types/Details";
import { Blog } from "./pages/Blog";
import { News } from "./pages/News";
import { BecomeMember } from "./pages/BecomeMember";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutTest />} />
        <Route path="Test" element={<NavigationMenuDynamic />} />
        <Route path="Tasischilar" element={<Tasischilar />} />
        <Route path="Details" element={<Details />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="News" element={<News />} />
        <Route path="BecomeMember" element={<BecomeMember />} />
      </Routes>
    </div>
  );
}

export default App;
