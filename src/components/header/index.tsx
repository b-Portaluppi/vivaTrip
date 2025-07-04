import Image from 'next/image'
import styles from './styles.module.scss'
import { NavBar } from './navBar'
import Link from 'next/link'

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src="/logo.webp"
                    alt='Logo empresa'
                    width={150}
                    height={150}
                    className={styles.logo}
                />
            </Link>

            <NavBar />
        </header>
    )
}