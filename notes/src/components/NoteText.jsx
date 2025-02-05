import { noteVariants } from './Note'
import { motion} from "framer-motion";

const NoteText = ({onchange , value}) => {
  return (
    <motion.div
    variants={noteVariants}
    animate = "visible"
    initial = "hidden"
    >
        <textarea placeholder="Start Typing ..." onChange={onchange} value={value} className="w-full resize-none h-[600px] text-white outline-none" ></textarea>
    </motion.div>
  )
}

export default NoteText