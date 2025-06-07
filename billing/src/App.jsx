import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar/MenuBar";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Explore from "./components/pages/Explore/Explore";
import ManageCategory from "./components/pages/ManageCategory/ManageCategory";
import Manageitems from "./components/pages/Manageitems/Mahageitems";
import ManageUsers from "./components/pages/ManageUsers/ManageUsers";

export default function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/items" element={<Manageitems />} />
        <Route path="/users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}
