import { useCallback, useEffect, useState } from "react";


export function useApi(apiFunction, immediate = true) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(immediate);
    const [error, setError] = useState(null);

    const execute = useCallback(async (...args) => {
        try {
            setIsLoading(true);
            setError(null)
            const result = await apiFunction(...args);
            setData(result)
            return result;
        } catch (error) {
            setError(error?.message || "An unexpected error occured.");
        } finally {
            setIsLoading(false);
        }
    }, [apiFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute]);

    return { data, setData, isLoading, error, refetch: execute }
}