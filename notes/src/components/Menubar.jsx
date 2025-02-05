import PropTypes from 'prop-types'
import '../layout/styles.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      <button
  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
  className={`px-3 py-1  rounded ${editor.isActive("heading", { level: 1 }) ? "bg-blue-500" : ""}`}
  style={{ cursor: 'pointer' }}
>
  H1
</button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1  rounded ${editor.isActive("heading", { level: 2 }) ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-1  rounded ${editor.isActive("heading", { level: 3 }) ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-3 py-1  rounded ${editor.isActive("paragraph") ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1  rounded ${editor.isActive("bold") ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1  rounded ${editor.isActive("italic") ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-3 py-1  rounded ${editor.isActive("strike") ? "bg-blue-500" : ""}`}
        style={{ cursor: 'pointer' }}
      >
        Strike
      </button>
    </div>
  );
};

MenuBar.propTypes = {
  editor: PropTypes.object.isRequired
}

export default MenuBar;
