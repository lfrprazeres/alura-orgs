import { useState } from "react"
import CardProdutor from "../CardProdutor"
import listaDeProdutores from "./utils/lista"

export default function ListaProdutores() {
  const [produtores, setProdutores] = useState(listaDeProdutores)

  function mudarAvaliacao(idProdutor: string, novaAvaliacao: number) {
    setProdutores(listaProdutores => listaProdutores.map(produtorAtual => {
      console.log(`produtor ${produtorAtual.label} tem o id ${produtorAtual.id}`)
      if(produtorAtual.id === idProdutor) produtorAtual.avaliacao = novaAvaliacao
      return produtorAtual;
    }))
  }
  return (
    <>
      {produtores.map((produtor, index) => 
        <CardProdutor mudarAvaliacao={mudarAvaliacao} key={index} {...produtor} />  
      )}
    </>
  )
}