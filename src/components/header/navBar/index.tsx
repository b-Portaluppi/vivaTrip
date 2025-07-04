"use client"

import Link from "next/link";
import styles from './styles.module.scss'
import { useContext } from "react";
import { UserContext } from "@/utils/context/user";

export function NavBar() {
    const { user, logout } = useContext(UserContext)
    return (
        <nav>
            <ul className={styles.listNav}>
                <li><Link href="/destinos" className={styles.link}>Destinos</Link></li>
                <li><Link href="#sobre" className={styles.link}>Sobre</Link></li>
                { user ? (
                    <li><button className={styles.button} onClick={() => logout()}>{ user.nome }</button></li>
                ) : ( <li><Link href="/login" className={styles.button}>Login</Link></li> )}
            </ul>
        </nav>
    )
}