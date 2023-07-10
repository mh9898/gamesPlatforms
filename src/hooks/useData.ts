import {AxiosRequestConfig, CanceledError} from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                setData(response.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrorMessage(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, errorMessage, isLoading };
};

export default useData;
