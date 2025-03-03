import PropTypes from 'prop-types'
import { noteVariants } from "../animation/note";
import { motion } from "framer-motion";


const NoteText = ({ onchange, value }) => {
  return (
    <motion.div variants={noteVariants} animate="visible" initial="hidden">
      <textarea
        placeholder="Start Typing ..."
        onChange={onchange}
        value={value}
        className="w-full resize-none h-[700px] mb-8 text-white outline-none "
      ></textarea>


    </motion.div>
  );
};

NoteText.propTypes = {
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired

};

export default NoteText;
