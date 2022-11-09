import React, { Children, createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app);

const authInfo = {}
const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;