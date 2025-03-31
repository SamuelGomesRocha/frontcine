import { FilmeData } from "./FilmeData";
import { ProgramacaoData } from "./ProgramacaoData";
import { UsuarioData } from "./UsuarioData";

export enum FormaPagamento{
    PIX, CREDITO, DEBITO, DINHEIRO, ESPECIARIAS, ESCAMBO
}

export interface IngressoData{
    id?: number,
    filme?: FilmeData,
    formaPagamento?: FormaPagamento,
    dataExibicao?:string
}