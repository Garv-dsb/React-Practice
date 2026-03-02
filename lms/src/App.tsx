import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Library from "./pages/Library/Library";
import Add from "./pages/Library/Add";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Library />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
