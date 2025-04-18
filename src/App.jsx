import React, { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Welcome from "./components/Welcome";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />}
      <Hero />
      <Welcome />
    </div>
  );
};

export default App;
