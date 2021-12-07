import styles from "./BarraBusca.module.scss";
import { CgSearch } from "react-icons/cg";
import { IBarraBusca } from "types/busca";

export default function BarraBusca({ busca, setBusca }: IBarraBusca) {
  return (
    <div className={styles["barra-busca"]}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="O que está procurando?"
      />
      <CgSearch size={20} color="#C7C7C7" />
    </div>
  );
}
