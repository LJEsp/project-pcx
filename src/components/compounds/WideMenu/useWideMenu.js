import { useState } from "react";

const useWideMenu = () => {
  const [isHovered, set] = useState(false);

  return {
    isHovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false)
    }
  };
};

export default useWideMenu;