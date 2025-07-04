'use client'

import { z } from "zod"
import { Input } from "../../../../components/input"
import { useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "@/utils/context/user"
import { useRouter } from "next/navigation"

const schema = z.object({
    email: z.string().email("Esse campo é obrigatório!"),
    password: z.string().min(6, "Esse campo deve conter no mínino 6 caracteres").nonempty("Esse campo é obrigatório!")
})

export type formData = z.infer<typeof schema>

export function FormularioLogin() {
    const { handleSubmit, register, formState: {errors} } = useForm<formData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const { loginAccount } = useContext(UserContext);
    const router = useRouter()

    function submit(data: formData) {
        loginAccount(data.email, data.password)
        router.push("/")
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={styles.form}>
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
                    
                <button type="submit" className={styles.button}>Entrar</button>
            </form>
        </>
    )
}