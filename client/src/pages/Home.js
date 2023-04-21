import React from "react";
import "./Home.css";
import Greeting from "../segments/Greeting";
import Projects from "../segments/Projects";
import Skills from "../segments/Skills";
import usePages from "../hooks/usePages";

export default function Home({ setIsLoading, setProgress, isLoading }) {
  const { ScrollToTop } = usePages();
  ScrollToTop();

  return (
    <div className="Home">
      <Greeting isLoading={isLoading} />
      <Projects setProgress={setProgress} setIsLoading={setIsLoading} />
      <Skills />
    </div>
  );
}
