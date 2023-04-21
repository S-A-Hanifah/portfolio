import { useState } from "react";

export default function useObserver(segment, threshold) {
  const [cross, setCross] = useState(false);
  if (segment) {
    const obsOptions = {
      root: null,
      threshold: threshold,
    };

    const obsFn = (entries) => {
      const [entry] = entries;
      const isCross = entry.isIntersecting;
      setCross(isCross);
    };

    const observer = new IntersectionObserver(obsFn, obsOptions);
    observer.observe(segment);
  }
  return { cross, setCross };
}
