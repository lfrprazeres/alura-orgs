import Botao from "components/Botao";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp
} from 'react-icons/ai'
import { Filtro as IFiltro } from "types/filtro";

interface Props extends IFiltro {
  clicarFiltro: (label: string, ativo: boolean) => void
}

export default function Filtro({ label, ativo, asc, clicarFiltro }: Props) {

  function handleOrdenacao(asc: boolean) {
    return asc ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />
  }

  function handleCor() {
    if(ativo) return 'primaria'
    return 'secundaria'
  }

  return (
    <Botao cor={handleCor()} onClick={() => clicarFiltro(label, ativo )}>
      {label}
      {ativo && handleOrdenacao(asc)}
    </Botao>
  )
}