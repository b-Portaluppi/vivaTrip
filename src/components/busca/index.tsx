'use client'

import { FormEvent, useState } from "react"
import styles from './styles.module.scss'
import { useRouter } from "next/navigation"

export function Busca() {
    const [destino, setDestino] = useState("")
    const router = useRouter()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if(!destino) {
            return alert("Por favor, selecione um destino.")
        }


        router.push(`/destinos/${destino}`)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.containerForm}>
                <div className={styles.containerInput}>
                    <select onChange={e => setDestino(e.target.value)}  className={styles.input}>
                        <option value="">Escolha o destino</option>
                        <option value="nova york">Nova York - EUA</option>
                        <option value="toquio">Toquio - Japão</option>
                        <option value="rio de janeiro">Rio de Janeiro - Brasil</option>
                        <option value="londres">Londres - Inglaterra</option>
                        <option value="roma">Roma - Itália</option>
                        <option value="paris">Paris - França</option>
                    </select>
                </div>
                <button type="submit" className={styles.buttonInput}>Buscar</button>
            </form>
        </div>
    )
}