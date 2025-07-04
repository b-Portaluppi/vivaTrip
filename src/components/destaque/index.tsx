import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss'
import { getCidade } from "@/utils/get/getDestaque";


export async function Destaque() {
    const cidade = await getCidade()

    return (
        <div className={styles.container}>
            {cidade.map(city => (
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
        </div>
    )
}