import { useEffect, useState } from "react";
import "./ModalFilme.css";
import { FilmeData } from "../../../interfaces/FilmeData";
import { useFilmeDataMutate } from "../../../hooks/useFilmeDataMutate";

interface InputProps {
  label: string;
  value: any;
  updateValue(value: any): void;
}

interface ModalProps{
}

const Input = ({ label, value, updateValue }: InputProps) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleAddDateTime = () => {
    if (currentValue) {
      const newDates = Array.isArray(value) ? [...value, currentValue+":00"] : [currentValue+":00"];
      updateValue(newDates);
      setCurrentValue(""); // Limpa o input após adicionar
    }
  };

  const handleRemoveDateTime = (index: number) => {
    if (Array.isArray(value)) {
      const newDates = value.filter((_, i) => i !== index);
      updateValue(newDates);
    }
  };

  return (
    <div>
      <label>{label}</label>

      {/* Campo para inserir um datetime-local */}
      {Array.isArray(value) ? (
        <div>
         <div className="datetime-container">   
          <input
            type="datetime-local"
            className="input-datetime"
            value={currentValue}
            onChange={(event) => setCurrentValue(event.target.value)}
          />
          <button type="button" className="btn-add" onClick={handleAddDateTime}>
            Adicionar
          </button>
          </div>
          {/* Lista de datas adicionadas */}
          <ul className="datetime-list">
            {value.map((dt, index) => (
              <li key={index}>
                {dt}{" "}
                <button className="remove-btn" onClick={() => handleRemoveDateTime(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <input
          type="text"
          className="input-datetime"
          value={value}
          onChange={(event) => updateValue(event.target.value)}
        />
      )}
    </div>
  );
};

export function CreateModalFilme() {
  const [titulo, setTitulo] = useState("");
  const [direcao, setDirecao] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [anoEstreia, setAnoEstreia] = useState("");
  const [duracao, setDuracao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [caminhoImagem, setCaminhoimagem] = useState("");
  const [datasExibicao, setDatasExibicao] = useState<Date[]>([]);
  const [quantidade, setQuantidade] = useState(0);

  const { mutate, isPending } = useFilmeDataMutate();

  const submit = () => {
    const filmeData: FilmeData = {
      titulo,
      direcao,
      sinopse,
      anoEstreia,
      duracao,
      caminhoImagem,
      programacao: {
        datasExibicao,
        quantidade,
      },
    };
    mutate(filmeData);
  };


  return (
    <div className="modal-over">
      <div className="modal-body">
        <h2>Cadastrar Filme</h2>
        <form className="input-container">
          <Input label="Título" value={titulo} updateValue={setTitulo} />
          <Input label="Direção" value={direcao} updateValue={setDirecao} />
          <Input label="Sinopse" value={sinopse} updateValue={setSinopse} />
          <Input label="Ano de Estreia" value={anoEstreia} updateValue={setAnoEstreia} />
          <Input label="Duração" value={duracao} updateValue={setDuracao} />
          <Input label="Imagem" value={caminhoImagem} updateValue={setCaminhoimagem} />
          <Input label="Programação" value={datasExibicao} updateValue={setDatasExibicao} />
          <Input label="Quantidade" value={quantidade} updateValue={setQuantidade} />
          <button onClick={submit} className="btn-secundary">
           {isPending ? 'Cadastrando...' : 'Cadastrar'}
           </button>
        </form>
        
      </div>
    </div>
  );
}
