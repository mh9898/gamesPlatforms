import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
    }, []);

    return { data, errorMessage, isLoading };
};

export default useData;
