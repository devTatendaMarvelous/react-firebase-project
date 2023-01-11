import { auth, provider } from '../config/firebase'
import { signInWithPopup}from 'firebase/auth'
export const Login = () => {
  const signIn = async (e: any) => {
    e.preventDefault()
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  }
  return (
    <div>
      <br/>
      <button onClick={signIn}
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign In With Google</button>
    </div>
  )
}
