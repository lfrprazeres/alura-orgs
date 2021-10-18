import Avaliacao from './Avaliacao';
import styles from './CardProdutor.module.scss';

interface Props {
  foto: string;
  avaliacao: number;
  distancia: number;
  nome: string,
  id: string,
  mudarAvaliacao: (idProdutor: string, novaAvaliacao: number) => void
}

export default function CardProdutor(
  {
    foto,
    avaliacao,
    distancia,
    nome,
    id,
    mudarAvaliacao
  }: Props
) {

  return (
    <div className={styles.card}>
      <div className={styles.card__imagem}>
        <img src={foto} alt={nome} />
      </div>
      <div className={styles.card__descricao}>
        <div>
          {nome}
          <Avaliacao
            avaliacao={avaliacao}
            mudarAvaliacao={mudarAvaliacao}
            idProdutor={id}
          />
        </div>
        Distância: {distancia / 1000} km
      </div>
    </div>
  )
}