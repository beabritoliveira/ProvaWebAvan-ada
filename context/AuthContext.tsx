
"use client";

import { createContext, useState } from "react";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
}

type UserAuthentication = {
    'x-access-token': string
}

export const AuthContext = createContext({} as AuthContextType);


export default function AuthProvider( { children }: { children: React.ReactNode } ){
    const [authError, setAuthError] = useState<string | null>(null);

    async function login({username, password} : SignIdData) {

        let token = "false"
        if(username == "admin" && password == "password"){
            token = "true"
        }     

        if(token == "false") setAuthError('Usuário ou senha inválidos. Verifique e tente novamente!');
    }
    
    return (
        <AuthContext.Provider value={{login, authError}} >
            {children}
        </AuthContext.Provider>
    );
};