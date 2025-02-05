import { motion} from "framer-motion";
import PropTypes from 'prop-types'

export const noteVariants = {
  hidden : {
    opacity : 0 , 
    y : 100
  },
  visible : {
    opacity : 1,
    y : 0 , 
    transition : {
      duration : 0.3
    }
  },
  
}


const Note = ({title , onclick}) => {
  return (
    <motion.div className="w-full bg-[#F1F5F9]  font-semibold  py-2 px-4 rounded-sm cursor-pointer hover:bg-[#cdd0d3] " 
    variants={noteVariants}
    animate = "visible"
    initial = "hidden"
    onClick={onclick}
    >
        <h2>{title}</h2>
    </motion.div>
  )
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
}

export default Note