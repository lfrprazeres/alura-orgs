import Logo from "assets/logo.svg";
import { IBarraBusca } from "types/busca";
import BarraBusca from "../BarraBusca";
import styles from "./Menu.module.scss";

export default function Menu(props: IBarraBusca) {
  return (
    <nav className={styles.menu}>
      <img alt="alura orgs" src={Logo} />
      <BarraBusca {...props} />
    </nav>
  );
}
