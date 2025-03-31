import axios, { AxiosPromise } from "axios"
import {FilmeData} from '../interfaces/FilmeData'
import { useQuery } from "@tanstack/react-query"

const API_URL='http://localhost:8080'

const fetchData = async (): AxiosPromise<FilmeData[]> => {
    const response = axios.get("http://localhost:8080/filmes", {
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

export function useFilmeData(){

    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['filme-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}