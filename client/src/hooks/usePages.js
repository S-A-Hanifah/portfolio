import { useLayoutEffect, useState } from "react";

export default function usePages() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  function ScrollToTop() {
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  return {
    isLoading,
    setIsLoading,
    progress,
    setProgress,
    ScrollToTop,
  };
}
