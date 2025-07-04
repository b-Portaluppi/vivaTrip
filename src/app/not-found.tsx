import Link from "next/link";
import styles from './notFound.module.scss'

export default function NotFound() {
    return (
        <div className={styles.containerNotFound}>
            <h1>OPS, Página não encontrada</h1>
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}