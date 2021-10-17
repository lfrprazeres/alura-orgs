import styles from './BarraBusca.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function BarraBusca() {
  return (
    <div className={styles['barra-busca']}>
      <CgSearch size={20} color="#C7C7C7" />
      <input placeholder="O que está procurando?"/>
    </div>
  )
}