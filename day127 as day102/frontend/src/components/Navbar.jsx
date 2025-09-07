import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="w-full bg-neutral-900 text-white border-b border-neutral-700 shadow-lg"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <h3 className="py-5 px-6 text-2xl md:text-3xl font-extrabold tracking-wide">
         Moody Player
      </h3>
    </motion.div>
  );
};

export default Navbar;
