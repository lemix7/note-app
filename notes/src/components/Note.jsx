import PropTypes from "prop-types";

const Note = ({ title, onclick }) => {
  return (
    <div
      className="w-full bg-[#F1F5F9] flex justify-between items-center  font-semibold  py-2 px-4 rounded-sm cursor-pointer hover:bg-[#cdd0d3] "
      onClick={onclick}
    >
      <h2>{title}</h2>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Note;
