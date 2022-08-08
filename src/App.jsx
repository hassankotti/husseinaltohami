import React from "react";
import "./App.css";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {

  return (
    <div className='antialiased bg-white dark:bg-gray-900'>
      <Header />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
