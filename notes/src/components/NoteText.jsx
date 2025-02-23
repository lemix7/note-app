import PropTypes from 'prop-types'
import { noteVariants } from "../animation/note";
import { motion } from "framer-motion";


const NoteText = ({ onchange, value , onclick }) => {
  return (
    <motion.div variants={noteVariants} animate="visible" initial="hidden">
      <textarea
        placeholder="Start Typing ..."
        onChange={onchange}
        value={value}
        className="w-full resize-none h-[700px] mb-8 text-white outline-none "
      ></textarea>

    <div className="w-full flex justify-end items-center">
        <button className=" bg-blue-500 hover:bg-blue-600 capitalize py-2 px-6 text-white rounded-md cursor-pointer transition-all"
        onClick = {onclick}
        >save note</button>
    </div>

    </motion.div>
  );
};

NoteText.propTypes = {
  onchange: PropTypes.func.isRequired,
  onclick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired

};

export default NoteText;
