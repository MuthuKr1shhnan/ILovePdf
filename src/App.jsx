import Nav from "./components/Nav";

import { LandingPage } from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import UploadJpgToPdfPage from "./Pages/UploadJpgToPdfPage";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/jpg-to-pdf' element={<UploadJpgToPdfPage />} />
      </Routes>
    </>
  );
}

export default App;
