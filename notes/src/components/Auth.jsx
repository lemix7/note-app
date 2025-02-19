import { useState } from "react"
import { auth , googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword , signInWithPopup , signOut } from 'firebase/auth'


const Auth = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const signIn = async () => {
        try{
        await createUserWithEmailAndPassword(auth , email , password)
        }
        catch(err){
            console.error(err)
        }
    }

    const signInGoogle = async  () => {
        try{
            await signInWithPopup(auth , googleProvider)
            }
            catch(err){
                console.error(err)
            }
    }

    console.log(auth?.currentUser?.email)
    
    const logOut = async  () => {
        try{
            await signOut(auth)
            }
            catch(err){
                console.error(err)
            }
    }

  return (
    <div>
        <div>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button onClick={signIn}>sign in</button>
        <button onClick={signInGoogle}>sign in with google </button>
        <button onClick={logOut}>logout</button>
    </div>
  )
}

export default Auth