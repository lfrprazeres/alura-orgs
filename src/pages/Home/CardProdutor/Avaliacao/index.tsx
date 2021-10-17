import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import styles from './Avaliacao.module.scss';

interface Props {
  avaliacao: number,
  mudarAvaliacao: (idProdutor: string, novaAvaliacao: number) => void,
  idProdutor: string
}

interface Estrela {
  cor: string,
  hover: boolean
}

export default function Avaliacao({ avaliacao, mudarAvaliacao, idProdutor }: Props) {

  const [cores, setCores] = useState<Estrela[]>([])
  const [hoverEstrela, setHoverEstrela] = useState<number>();

  const corAvaliacao = useCallback((index: number) => {
    const avaliado = avaliacao >= index
    if(hoverEstrela) {
      return hoverEstrela >= index ? '#4CBFA7' : '#222'
    }
    return avaliado ? '#2A9F85' : '#000'
  },[avaliacao, hoverEstrela]);

  useEffect(() => {
    setCores([
      {
        cor: corAvaliacao(1),
        hover: false
      },
      {
        cor: corAvaliacao(2),
        hover: false
      },
      {
        cor: corAvaliacao(3),
        hover: false
      },
      {
        cor: corAvaliacao(4),
        hover: false
      },
      {
        cor: corAvaliacao(5),
        hover: false
      }
    ])
  }, [corAvaliacao, hoverEstrela]);

  return (
    <div className={styles.stars} onMouseLeave={() => setHoverEstrela(undefined)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <AiFillStar
          onClick={() => mudarAvaliacao(idProdutor, index + 1)}
          onMouseOver={() => setHoverEstrela(index + 1)}
          key={index}
          color={cores[index]?.cor}
        />
      ))}
    </div>
  )
}