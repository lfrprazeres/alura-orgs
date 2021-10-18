import Menu from "./Menu";
import styles from './Home.module.scss';
import BarraBusca from "./BarraBusca";
import ListaProdutores from "./ListaProdutores";
import { useCallback, useState } from "react";
import listaDeProdutores from "./utils/lista";
import { useEffect } from "react";
import { Filtro } from "types/filtro";
import Filtros from "./Filtros";
import listaDeFiltros from "./utils/filtros";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [listaProdutores, setListaProdutores] = useState(listaDeProdutores);
  const [produtoresAMosta, setProdutoresAMosta] = useState(listaProdutores);
  const [filtros, setFiltros] = useState(listaDeFiltros)

  const alterarLista = useCallback(() => {
    const exp = new RegExp(busca, 'i');
    let novaLista = listaProdutores.filter(produtor => exp.test(produtor.nome));
    const filtroAtivo = filtros.find(filtro => filtro.ativo);
    if(filtroAtivo) {
      let filtroLabel = filtroAtivo.label;
      novaLista.sort((a, b) => {
        if(filtroAtivo.asc) {
          return a[filtroLabel] > b[filtroLabel] ? 1 : -1
        }
        return a[filtroLabel] < b[filtroLabel] ? 1 : -1
      })
    }

    setProdutoresAMosta(novaLista);
  }, [busca, listaProdutores, filtros]);

  useEffect(() => {
    alterarLista();
  },[busca, alterarLista, filtros]);

  function mudarFiltro(filtro: Filtro) {
    if(!filtro.ativo) {
      filtro.ativo = true;
    } else if(filtro.ativo && filtro.asc) {
      filtro.ativo = true;
      filtro.asc = false;
    } else if(filtro.ativo && !filtro.asc) {
      filtro.ativo = false;
      filtro.asc = true;
    }
    
    return filtro;
  }

  function clicarFiltro(label: string, ativo: boolean) {
    setFiltros(filtros.map(filtro => {
      if(filtro.label === label) {
        filtro = mudarFiltro(filtro);
      } else if(!ativo) {
        filtro.ativo = false;
        filtro.asc = true;
      }
      return filtro
    }))
  }

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
        <Filtros
          clicarFiltro={clicarFiltro}
          filtros={filtros}
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