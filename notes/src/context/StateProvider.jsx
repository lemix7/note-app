import { useReducer } from "react"
 import {notesReducer , INITIAL_STATE , stateContext} from '../store/notesReducer'



// eslint-disable-next-line react/prop-types
const StateProvider = ({children}) => {

    const [state , dispatch] = useReducer(notesReducer, INITIAL_STATE)

  return (
    <stateContext.Provider value = {{state , dispatch}}>
        {children}
    </stateContext.Provider>
  )
}

export default StateProvider