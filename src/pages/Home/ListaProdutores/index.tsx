import { Produtor } from "types/produtor"
import CardProdutor from "./CardProdutor"

interface Props {
  listaProdutores: Produtor[],
  setListaProdutores: React.Dispatch<React.SetStateAction<Produtor[]>>
}

export default function ListaProdutores({ listaProdutores, setListaProdutores }: Props) {
  function mudarAvaliacao(idProdutor: string, novaAvaliacao: number) {
    setListaProdutores(listaProdutores => listaProdutores.map(produtorAtual => {
      if(produtorAtual.id === idProdutor) produtorAtual.avaliacao = novaAvaliacao
      return produtorAtual;
    }))
  }
  return (
    <>
      {listaProdutores.map((produtor, index) => 
        <CardProdutor mudarAvaliacao={mudarAvaliacao} key={index} {...produtor} />  
      )}
    </>
  )
}