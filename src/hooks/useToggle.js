import { useState } from "react";

export default function useToggle() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return [isVisible, toggle];
}
