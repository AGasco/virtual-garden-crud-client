import {
  CreatePlant,
  EditPlant,
  Home,
  Login,
  NavbarWrapper,
  NotFound,
  PlantDetailPage,
  PlantsList,
  ProtectedRoute,
  Register
} from '@/components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavbarWrapper />}>
          {/* Public routes */}
          <Route path="/signin" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/plants" element={<PlantsList />} />
            <Route path="/plants/create" element={<CreatePlant />} />
            <Route path="/plants/edit/:id" element={<EditPlant />} />
            <Route path="/plants/:id" element={<PlantDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
