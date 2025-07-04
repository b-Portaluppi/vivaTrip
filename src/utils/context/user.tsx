'use client'

import { auth } from "@/services/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserContextProps {
    createAccount: (email: string, senha: string, nome: string) => void,
    loginAccount: (email: string, senha: string) => void,
    logout: () => void,
    user: UserProps | undefined,
}

interface UserProps {
    email: string | null,
    nome: string | null,
    id: string | null
}

interface ProviderProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export default function UserProvider({ children }: ProviderProps) {
    const [user, setUser] = useState<UserProps | undefined>()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    email: user.email,
                    nome: user.displayName,
                    id: user.providerId
                })
            }
        })
    }, [])

    async function logout() {
        await signOut(auth)
    }

    async function loginAccount(email: string, senha: string) {
        try {
           const user = await signInWithEmailAndPassword(auth, email, senha)

          setUser({
            email: user.user.email,
            nome: user.user.displayName,
            id: user.providerId
          })
            
            toast.success('Login realizado com sucesso!')
        } catch(err) {
            toast.error("OPS, Erro ao fazer o Login")
        }
    }

    async function createAccount(email: string, senha: string, nome: string) {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, senha)
            await updateProfile(user.user, {displayName: nome}) 
            toast.success('Cadastro realizado com sucesso!')
        } catch (err) {
            console.log(err)
            toast.error("OPS, Erro ao se cadastrar")
        }
    }

    return (
        <UserContext.Provider value={{createAccount, loginAccount, logout, user}}>
            { children }
        </UserContext.Provider>
    )
}