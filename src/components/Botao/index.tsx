import styles from './Botao.module.scss';

interface Props {
  type?: 'submit' | 'reset' | 'button',
  children?: React.ReactNode,
  onClick?: () => void
}

export default function Botao({ type, onClick, children }: Props) {
  return (
    <button
      type={type}
      className={styles.botao}
      onClick={onClick}
    >
      {children}
    </button>
  )
}