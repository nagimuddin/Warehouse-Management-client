import { useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        console.log('signin in soon');
    }
    return {
        user,
        setUser,
        signInWithGoogle,
    }
}

export default useFirebase;