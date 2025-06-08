import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar/MenuBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import Manageitems from "./pages/Manageitems/Manageitems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";

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
