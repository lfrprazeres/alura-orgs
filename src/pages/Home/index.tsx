import Menu from "./Menu";
import styles from './Home.module.scss';
import BarraBusca from "./BarraBusca";
import ListaProdutores from "./ListaProdutores";
import { useCallback, useState } from "react";
import listaDeProdutores from "./ListaProdutores/utils/lista";
import { Produtor } from "types/produtor";
import { useEffect } from "react";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [listaProdutores, setListaProdutores] = useState<Produtor[]>(listaDeProdutores);
  const [produtoresAMosta, setProdutoresAMosta] = useState(listaProdutores);

  const alterarLista = useCallback(() => {
    setProdutoresAMosta(() => {
      const exp = new RegExp(busca, 'i');

      return listaProdutores.filter(produtor => exp.test(produtor.label));
    })
  }, [busca, listaProdutores]);

  useEffect(() => {
    alterarLista();
  },[busca, alterarLista])

  return (
    <main className={styles.home}>
      <header className={styles.home__header}>
        <Menu />
        <h1> Olá Aluno(a) </h1>
        <p>
          Encontre os melhores produtores
        </p>
        <BarraBusca
          busca={busca}
          setBusca={setBusca}
        />
      </header>
      <section className={styles.home__itens}>
        <ListaProdutores
          listaProdutores={produtoresAMosta}
          setListaProdutores={setListaProdutores}
        />
      </section>
    </main>
  )
}