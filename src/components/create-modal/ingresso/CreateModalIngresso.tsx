import { useEffect, useState } from "react"
import { ProgramacaoData } from "../../../interfaces/ProgramacaoData"
import { IngressoData, FormaPagamento } from "../../../interfaces/IngressoData"
import "./ModalIngresso.css"
import { useIngressoDataMutate } from "../../../hooks/useIngressoDataMudate"

interface InputProps{
    label: string,
    value: any,
    updateValue(value: any): void
}

interface ModalIngressoProps{
    id_Filme: string,
    imagem: string,
    titulo: string,
    programacao: ProgramacaoData,
    qtdIngressos: string,
    closeModal(): void,
    sinopse: string

}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            {Array.isArray(value) ? (
                <select 
                    className="input-data select-input" 
                    value={value[0]} // Define um valor inicial
                    onChange={event => updateValue(event.target.value)}
                >
                    {value.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input 
                    value={value} 
                    className="input-data" 
                    onChange={event => updateValue(event.target.value)} 
                />
            )}
        </>
    );
};


export function CreateModalIngresso({id_Filme, imagem, titulo, programacao, qtdIngressos, closeModal, sinopse}: ModalIngressoProps){

    // ✅ Define um valor inicial
    const [dataExibicao, setDatasExibicao] = useState(programacao.datasExibicao?.[0] ?? "");
    const {mutate, isSuccess} = useIngressoDataMutate()

    const submit = () => {
        console.log("Estado final de dataExibicao:", dataExibicao);

        if (!dataExibicao) {
            console.error("Erro: Nenhuma data selecionada!");
            return;
        }

        const ingressoData: IngressoData = {
            filme: { idFilme: id_Filme },
            dataExibicao: String(dataExibicao)
        };

        console.log("Enviando dados:", ingressoData);
        mutate(ingressoData);
    };

    useEffect(() => {
        console.log("Novo estado de dataExibicao:", dataExibicao);
    }, [dataExibicao]);


    return(
        <div className="modal-fechado">
            <button onClick={() => window.location.reload()} className="btn-desliga">X</button>
            <div className="modal-corpo">
                <h2>Compre seu ingresso</h2>
                <h3>{titulo}</h3>
                <h5>{sinopse}</h5>
                <img src={imagem} />
                <h3>R$20 Inteira | R$10 Meia</h3>
                <h4>Quantidade de ingressos disponível: {qtdIngressos}</h4>
                
                <form className="container-modal">
                    <Input 
                        label="Horário" 
                        value={dataExibicao} // ✅ Usa `dataExibicao`, e não `programacao.datasExibicao`
                        updateValue={(val) => {
                            console.log("Valor selecionado:", val);
                            setDatasExibicao(val);
                        }} 
                    />
                    <h3>Quantidade comprada: 1</h3>
                    <button onClick={submit} className="btn-submit">Comprar</button> 
                </form>
               
            </div>
        </div>
    )
}
