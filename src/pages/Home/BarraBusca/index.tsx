import styles from './BarraBusca.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function BarraBusca({ busca, setBusca }: Props) {
  return (
    <div className={styles['barra-busca']}>
      <CgSearch size={20} color="#C7C7C7" />
      <input
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        placeholder="O que está procurando?"
      />
    </div>
  )
}