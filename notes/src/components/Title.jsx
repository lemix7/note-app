import PropTypes from "prop-types";
import { noteVariants } from "../animation/note";
import { motion } from "framer-motion";

const Title = ({ onchange, value }) => {
  return (
    <motion.div
      className=""
      variants={noteVariants}
      animate="visible"
      initial="hidden"
    >
      <input
        type="text"
        value={value}
        placeholder="Untitled Note"
        className="w-full  text-4xl  font-semibold text-white placeholder:text-white  outline-none"
        onChange={onchange}
      />
    </motion.div>
  );
};

Title.propTypes = {
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
