import React from "react";
import { Filtro as IFiltro } from "types/filtro";
import Filtro from "./Filtro";
import styles from './Filtros.module.scss';

interface Props {
  filtros: IFiltro[],
  clicarFiltro: (label: string, ativo: boolean) => void
}

export default function Filtros({ filtros, clicarFiltro }: Props) {

  return (
    <div className={styles.filtros}>
      {filtros.map((filtro, index) => (
        <Filtro
          {...filtro}
          key={index}
          clicarFiltro={clicarFiltro}
        />
      ))}
    </div>
  )
}