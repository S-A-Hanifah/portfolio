import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import Desc from "./pages/Desc";
import usePages from "./hooks/usePages";

function App() {
  const { progress, setProgress, isLoading, setIsLoading, ScrollToTop } =
    usePages();

  ScrollToTop();

  return (
    <BrowserRouter scrollRestoration={true}>
      <div className="App">
        <Navbar setProgress={setProgress} setIsLoading={setIsLoading} />
        {isLoading && progress < 100 && (
          <Loading
            progress={progress}
            setProgress={setProgress}
            setIsLoading={setIsLoading}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setProgress={setProgress}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="/desc/:id" element={<Desc isLoading={isLoading} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
