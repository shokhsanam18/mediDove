import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Index } from "./pages/Index/Index";
import { About } from "./pages/About/About";
import { Tasischilar } from "./pages/About/Tasischilar";
import { Details } from "./pages/Surgery-types/Details";
import { Blog } from "./pages/Blog";
import { News } from "./pages/News";
import { BecomeMember } from "./pages/BecomeMember/BecomeMember";
import { Layout } from "./components/Layout";
import { Shifokorlar } from "./pages/About/Shifokorlar";
import { Ustav } from "./pages/About/Ustav";
import { Surgery } from "./pages/Surgery-types/Surgery";
import { Contact } from "./pages/ContantUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tasischilar" element={<Tasischilar />} />
          <Route path="/Ustav" element={<Ustav />} />
          <Route path="/Shifokorlar" element={<Shifokorlar />} />
          <Route path="/Surgery" element={<Surgery />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/BecomeMember" element={<BecomeMember />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/News" element={<News />} />
          <Route path="/ContactUs" element={<Contact />} />
        </Route>
        <Route path="*" element={<div>404 Not found</div>} />
        {/* <Route path="/Test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
