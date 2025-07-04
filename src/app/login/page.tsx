import Link from "next/link";
import { FormularioLogin } from "./components/formularioLogin";
import styles from './styles.module.scss'

export default function Login() {
    return (
        <main className={styles.container}>
            <h1>Bem-vindo de volta!</h1>
            <p>
                Faça login para continuar explorando <br /> o mundo com a VivaTrip
            </p> 

            <FormularioLogin />

            <span><Link href="/register">Não tem conta?</Link></span>
        </main>
    )
}