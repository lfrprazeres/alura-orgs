import Avaliacao from './Avaliacao';
import styles from './CardProdutor.module.scss';

interface Props {
  foto: string;
  avaliacao: number;
  distancia: number;
  label: string,
  id: string,
  mudarAvaliacao: (idProdutor: string, novaAvaliacao: number) => void
}

export default function CardProdutor(
  {
    foto,
    avaliacao,
    distancia,
    label,
    id,
    mudarAvaliacao
  }: Props
) {

  return (
    <div className={styles.card}>
      <div className={styles.card__imagem}>
        <img src={foto} alt={label} />
      </div>
      <div className={styles.card__descricao}>
       <div>
        {label}
        <Avaliacao
          avaliacao={avaliacao}
          mudarAvaliacao={mudarAvaliacao}
          idProdutor={id}
        />
       </div>
      </div>
    </div>
  )
}