import classNames from 'classnames';
import styles from './Botao.module.scss';

interface Props {
  type?: 'submit' | 'reset' | 'button',
  children?: React.ReactNode,
  onClick?: () => void,
  cor?: 'primaria' | 'secundaria'
}

export default function Botao({ type, onClick, children, cor = "primaria" }: Props) {
  return (
    <button
      type={type}
      className={classNames({
        [styles.botao]: true,
        [styles.botao__primario]: cor === 'primaria',
        [styles.botao__secundario]: cor === 'secundaria'
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}