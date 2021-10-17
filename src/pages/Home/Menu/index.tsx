import Logo from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
       <img alt="alura orgs" src={Logo} />
    </nav>
  )
}