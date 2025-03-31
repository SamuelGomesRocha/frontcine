import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ProgramacaoData } from "../interfaces/ProgramacaoData"
import { IngressoData } from "../interfaces/IngressoData"

const API_URL='http://localhost:8080'

const postData = async (data: IngressoData): AxiosPromise<any> => {
    const response = axios.post("http://localhost:8080/ingresso", data, {
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

export function useIngressoDataMutate(){
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2
    })

    return mutate
}