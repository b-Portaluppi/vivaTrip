import { getBusca } from "@/utils/get/getDestaque"
import styles from './styles.module.scss'
import Image from "next/image"
import Link from "next/link"

export default async function Busca({params: {busca}}: {
    params: {busca: string}
}) {

    const nome = decodeURIComponent(busca)

    const cidade = await getBusca(nome)

    console.log(cidade)

    if(!busca) {
        return (
            <div>
                <h1>Cidade não encontrada</h1>
            </div>
        )
    }
    return (
        <main className={styles.container}>
            <h1>Destino encontrados:</h1>

            {cidade.map((city) => (
                <div className={styles.containerCity} key={city.id}>
                    <div className={styles.containerImage}>
                        <Image
                            src={city.imgurl}
                            alt={city.name}
                            fill={true}
                            priority={true}
                            quality={100}
                            className={styles.innerImage}
                        />
                    </div>

                    <h2 className={styles.title}>{city.name}</h2>
                    <span className={styles.price}>{city.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                    <Link href={`/description/${city.id}`} className={styles.btn}>Saiba mais</Link>
                </div>
                ))}
        </main>
    )
}