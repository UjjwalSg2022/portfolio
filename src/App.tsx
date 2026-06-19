import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Enough time to show all loader lines

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;