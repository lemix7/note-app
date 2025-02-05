import { useContext } from 'react';
import Note from '../components/Note';
import { stateContext} from '../store/notesReducer'
import AddNoteBtn from '../components/AddNoteBtn';
import Logo from '../components/Logo';



const Side = () => {

  const {state , dispatch} = useContext(stateContext)


  return (
    <div className=" w-[30%] bg-black lg:w-[20%] h-screen border-r border-gray-400 flex flex-col items-center gap-4">

        <Logo />
        <AddNoteBtn />

      <div className='w-full flex flex-col items-center gap-5 p-4'>
          {state.notes.map((note ) => (
            <Note title={note.title || "Untitled"} key={note.id} onclick={() => dispatch({type : 'SELECT_NOTE' , payload : note.id})}/>
          ))}
      </div>



    </div>
  );
};

export default Side;
