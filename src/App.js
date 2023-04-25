import React from "react";

// import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Footer />
    </div>
  );
};

export default App;
