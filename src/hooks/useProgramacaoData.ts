import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { ProgramacaoData } from "../interfaces/ProgramacaoData"

const API_URL='http://localhost:8080'

const fetchData = async (): AxiosPromise<ProgramacaoData[]> => {
    const response = axios.get("http://localhost:8080/programacao", {
        auth: {
            username: "admin",
            password: "alohomora"
        },
        withCredentials: true, 
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export function useProgramacaoData(){

    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['programao-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}