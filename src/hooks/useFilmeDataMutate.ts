import axios, { AxiosPromise } from "axios"
import { useMutation } from "@tanstack/react-query"
import { FilmeData } from "../interfaces/FilmeData"

const API_URL='http://localhost:8080'

const postData = async (data: FilmeData): AxiosPromise<any> => {
    const response = axios.post("http://localhost:8080/filmes", data, {
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

export function useFilmeDataMutate(){
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2
    })

    return mutate
}