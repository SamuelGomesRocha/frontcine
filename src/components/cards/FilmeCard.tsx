import { useState } from "react"
import "./FilmeCard.css"
import { CreateModalIngresso } from "../create-modal/ingresso/CreateModalIngresso"
import { ProgramacaoData } from "../../interfaces/ProgramacaoData"


interface FilmeProps{
  idFilme: string,
  titulo: string,
  duracao: string,
  caminhoImagem: string,
  programacao: ProgramacaoData,
  sinopse: string
}


export function FilmeCard({idFilme, titulo, duracao, caminhoImagem, programacao, sinopse}: FilmeProps){
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
 
  return(
    <>
      <div className="card" onClick={handleOpenModal}>
       <img src={caminhoImagem}/>
       <h2 className="text-default">{titulo}</h2>
       <p className="text-default1"><b>Tempo duração: {duracao}</b></p>
      
       <h2 className="text-hover">🎟️</h2>
      
      </div>
       {isModalOpen && <CreateModalIngresso id_Filme={idFilme} imagem={caminhoImagem} titulo={titulo} programacao={programacao} qtdIngressos={programacao.quantidade?.toString() ?? ""} closeModal={handleOpenModal} sinopse={sinopse}/>}
       </>
  )
}