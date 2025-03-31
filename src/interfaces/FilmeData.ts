import { ProgramacaoData } from "./ProgramacaoData"

export interface FilmeData {
    idFilme?: string,
    titulo?: string,
    direcao?: string,
    sinopse?: string,
    anoEstreia?: string,
    duracao?: string,
    caminhoImagem?: string
    programacao?: ProgramacaoData
}