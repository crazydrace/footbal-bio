import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import PlayerBio from "./pages/PlayerBio";
import PlayerBioDetail from "./pages/PlayerBioDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/player-bio" element={<PlayerBio />} />
        <Route path="/player-bio/:id" element={<PlayerBioDetail />} />
      </Routes>
    </div>
  );
}

export default App;
