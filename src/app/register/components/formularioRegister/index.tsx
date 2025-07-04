'use client'

import { z } from "zod"
import { Input } from "../../../../components/input"
import { useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/services/firebaseConfig"
import { useContext } from "react"
import { UserContext } from "@/utils/context/user"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


const schema = z.object({
    name: z.string().nonempty("Esse campo é obrigatório"),
    email: z.string().email("Esse campo é obrigatório!"),
    password: z.string().min(6, "Esse campo deve conter no mínino 6 caracteres").nonempty("Esse campo é obrigatório!")
})

export type formData = z.infer<typeof schema>

export function FormularioRegister() {
    const { handleSubmit, register, formState: {errors} } = useForm<formData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const { createAccount } = useContext(UserContext);
    const router = useRouter()

    async function submit(data: formData) {
        createAccount(data.email, data.password, data.name)

 

        router.push("/")
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={styles.form}>
                <Input 
                    type="text"
                    placeholder="Nome"
                    errors={errors?.name?.message}
                    register={register}
                    name="name"
                />

                <Input 
                    type="email"
                    placeholder="Email"
                    errors={errors?.email?.message}
                    register={register}
                    name="email"
                />

                <Input 
                    type="password"
                    placeholder="Senha"
                    errors={errors?.password?.message}
                    register={register}
                    name="password"
                />

                <span>Ao se cadastrar você concorda com nossos Termos de Serviços e Politica de Privacidade</span>
                    
                <button type="submit" className={styles.button}>Cadastrar</button>
            </form>
        </>
    )
}