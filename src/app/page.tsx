import Link from "next/link";
import styles from "./page.module.scss";
import { Destaque } from "@/components/destaque";

export default function Home() {


  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.main}>
          <h1>Encontre sua próxima <br /> aventura</h1>
          <h2>Descubra destinos incriveis e viva experiências memoráveis</h2>

          <Link href="/destinos" className={styles.btnDestinos}>Ver destinos</Link>
        </div>
      </section>

      <section className={styles.containerDestaque}>
        <h2 className={styles.title}>Destinos em destaques</h2>

        <Destaque />
      </section>

      <section className={styles.containerSobre} id="sobre">
        <h2 className={styles.title}>Sobre nós</h2>
        <p className={styles.text}>
          Na VivaTrip, acreditamos que viajar é muito mais do que conhecer novos lugares — é colecionar experiências, criar memórias e se conectar com o mundo. Somos apaixonados por transformar o sonho da sua próxima viagem em realidade, com praticidade, segurança e o melhor custo-benefício.
        </p>
        <p className={styles.text}>
          Nossa plataforma foi criada para facilitar o planejamento das suas viagens, oferecendo uma curadoria de destinos incríveis, acomodações confiáveis e as melhores opções de pacotes. Seja uma viagem rápida, um intercâmbio, férias em família ou aquela aventura dos sonhos, estamos aqui para te ajudar em cada etapa do caminho.
        </p>
      </section>

      <footer>
        <span className={styles.footer}>©2025 VivaTrip. Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}
