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
            //console.log(petitionResponse);

            response.data = petitionResponse.data
        } catch (error) {
            console.log(error);
            response.error = error.response.data
        } finally {
            console.log(response)
            setMainContext((prevState) => ({
                ...prevState,
                loading: false,
                notification: {
                    type: (response?.error ? "WARNING" : "SUCCESS"),
                    message: (response.error ? `${response?.error?.message} - ${response?.error?.path}` : response?.data?.message),
                }
            }))
        }

        return response;
    })();
}