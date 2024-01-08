import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AxiosContext } from "../../Infrastructure/AxiosProvider";

export default ({ context, props }) => {
    console.log(context)
    const { url, method, payload } = props
    const { mainContext, setMainContext } = context


    let response = {
        data: null,
        error: null
    }
    return (async () => {
        setMainContext((prevState) => ({
            ...prevState,
            loading: true
        }))

        try {
            const petitionResponse = await mainContext.services.axios.request({
                data: payload,
                method,
                url,
            });

            response.data = petitionResponse
        } catch (error) {
            response.error = error
        } finally {
            setMainContext((prevState) => ({
                ...prevState,
                loading: false
            }))
        }
        return response;
    })();
}