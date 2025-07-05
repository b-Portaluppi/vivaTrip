import { getCidadeInfo } from "@/utils/get/getDestaque"
import { Maps } from "../maps"
import Image from "next/image"
import styles from './styles.module.scss'

export default async function Page({params}: {
    params: Promise<{id: string}>
}) {

    const {id} = await params

    const city = await getCidadeInfo(id)

    if(!city) {
        return (
            <div>ERROR 404</div>
        )
    }

    return (
        <main className={styles.container}>
            <div className={styles.containerImage}>
                <Image
                    className={styles.image}
                    src={city.imgurl}
                    alt="Imagem da cidade"
                    width={900}
                    height={400}
                    quality={100}
                />
            </div>

            <section className={styles.containerDescricao}>
                <div className={styles.containerTitle}>
                    <h1>{city.name}</h1>
                    <h2>{city.country}</h2>
                </div>

                <div className={styles.containerText}>
                    <article className={styles.descricao}>
                        <h3>Descrição</h3>
                        <p>{city.description}</p>
                    </article>

                    <div className={styles.maps}>
                        <Maps
                            long={city.longitude}
                            lat={city.latitude}
                        />

                        <button className={styles.btnReserva}>Reservar agora</button>
                    </div>
                </div>
            </section>
        </main>
    )
}