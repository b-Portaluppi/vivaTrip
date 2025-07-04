import Link from 'next/link'
import { FormularioRegister } from './components/formularioRegister'
import styles from './styles.module.scss'

export default function Register() {
    return (
        <main className={styles.container}>
            <h1>Bem-vindo de volta!</h1>
            <p>
                Faça login para continuar explorando <br /> o mundo com a VivaTrip
            </p> 

            <FormularioRegister />

            <span><Link href="/register">Já tem uma conta? <strong>Entrar</strong></Link></span>
        </main>
    )
}