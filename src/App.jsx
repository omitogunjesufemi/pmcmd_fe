import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import InitiativeList from "./pages/InitiativeList";
import CreateInitiative from "./pages/CreateInitiaitve";
import EditInitiative from "./pages/EditInitiative";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/initiatives" element={<InitiativeList />} />
              <Route path="/initiatives/add" element={<CreateInitiative />} />
              <Route path="/initiatives/:initiative_id/edit" element={<EditInitiative />} />
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
