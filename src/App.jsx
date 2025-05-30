import Nav from "./components/Nav";

import { LandingPage } from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";

import { JpgToPdf, MergePdf, SplitPdf } from "./Pages/Conversions";
import UnderConstruction from "./Pages/Underconstruction";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/merge-pdf' element={<MergePdf />} />
        <Route path='/jpg-to-pdf' element={<JpgToPdf />} />
        <Route path='/split-pdf' element={<SplitPdf />} />
        <Route path="*" element={<UnderConstruction/>}/>
      </Routes>
    </>
  );
}

export default App;
