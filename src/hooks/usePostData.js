import { useEffect, useState } from "react";

export const usePostData = (url, formState) => {
    console.log(formState);

    const [ok, setOk] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const submit = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(formState),
                "Content-Type": "application/json",
            });
            if (response.ok) {
                setData(await response.JSON());
                setOk(true)
                setError(null)
            } else {
                setError(new Error(response.statusText));
            }

        } catch (err) {
            setError(err);
        }

        return {
            ok, error, data
        }
    };   

    return { submit }
}
