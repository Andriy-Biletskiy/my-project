import { useEffect,useState } from 'react';

import { auth , db as database } from '../firebase';

export const useAuth = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password);
    };

    const logout = async () => {
        await auth.signOut();
    };

    return { user, login, logout };
};
