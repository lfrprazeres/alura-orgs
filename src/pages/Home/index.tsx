import Botao from "components/Botao";
import Menu from "./Menu";
import styles from './Home.module.scss';
import BarraBusca from "./BarraBusca";
import ListaProdutores from "./ListaProdutores";

export default function Home() {
  return (
    <main className={styles.home}>
      <header className={styles.home__header}>
        <Menu />
        <h1> Olá Aluno(a) </h1>
        <p>
          Encontre os melhores produtores
        </p>
        <BarraBusca />
      </header>
      <section className={styles.home__itens}>
        <ListaProdutores />
        <Botao>
          Botão Principal
        </Botao>
      </section>
    </main>
  )
}