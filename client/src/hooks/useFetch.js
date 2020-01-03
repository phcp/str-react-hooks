import { useEffect, useState } from "react";

const baseUrl = 'http://7380c9a6.ngrok.io/';

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
