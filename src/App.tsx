import { useState } from 'react'
import './App.css'
import {useFilmeData} from './hooks/useFilmeData.ts'
import { FilmeCard } from './components/cards/FilmeCard'
import { CreateModalFilme } from './components/create-modal/filme/CreateModalFilme.tsx'
import { CreateModalSobre } from './components/create-modal/sobre/CreateModalSobre.tsx'
//import FilmeCard from "./components/cards/FilmeCard";

function App() {

  const {data} = useFilmeData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalSobreOpen, setIsModalSobreOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleOpenModalSobre = () => {
    setIsModalSobreOpen(prev => !prev)
  }

  return (
<>  
    <div className='navbar'>
      <h1 className='navbar-title'>Cine Cult</h1>
    </div>

    <div className='navegador'>
      <div className='menus'>
        <h2 className='navegador-menu' onClick={handleOpenModal}>NOVO FILME</h2>
        <h2 className='navegador-menu' onClick={handleOpenModalSobre}>SOBRE</h2>
      </div>
      
    {/* 
      <div className='carousel-container'>
        <div className='carousel'>
        {Array.isArray(data) && data?.map(filmeData => <img
            src={filmeData.caminhoImagem}
          />)}
        </div>
      </div>
    */}
    </div>
    <div className='nav-estatico'>
      <h2 className='nav-estatico-titulo'>FILMES</h2>
    </div>
    <div className='container'>
     
       
      <div className='card-grid'>
          {Array.isArray(data) && data?.map(filmeData => <FilmeCard 
            idFilme={(filmeData.idFilme ?? "").toString()}
            titulo={filmeData.titulo?.toString() ?? ""}
            duracao={filmeData.duracao?.toString() ?? ""}
            caminhoImagem={filmeData.caminhoImagem?.toString() ?? ""}
            programacao={filmeData?.programacao ?? {}}
            sinopse={filmeData?.sinopse ?? ""}
          />)
}

      </div>
      


    </div>
    {isModalOpen  && <CreateModalFilme  />}
    {isModalSobreOpen && <CreateModalSobre/>}


    <div className='rodape0-informativo'/>

    <h2 className='rodape0-informativo-menu'>INGRESSOS</h2>

    <div className='rodape1-informativo'>

    </div>
    </>
  )
}

export default App
