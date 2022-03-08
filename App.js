import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
