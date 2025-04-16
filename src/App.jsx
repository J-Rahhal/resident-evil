import React, { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen w-full bg-red-900">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />}
    </div>
  );
};

export default App;
