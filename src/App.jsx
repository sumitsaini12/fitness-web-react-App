import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </>
  );
}

export default App;
