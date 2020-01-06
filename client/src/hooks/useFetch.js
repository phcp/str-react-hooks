import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3001/';

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(baseUrl + endpoint)
            .then(data => data.json())
            .then(data => {
                setData(data)
            });
    }, [endpoint]);

    return {
        data
    };
}
