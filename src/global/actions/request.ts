import Axios from "axios";
import renderToast, {toastTypes} from "./renderToast";
import {requestOptionType, thunkActionType} from "../types";

const instance = Axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 7000,
    params: {},
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use((async request => {
        console.log('>>>>>>>>>>>>', request);
        return Promise.resolve(request);
    }
));

instance.interceptors.response.use(response => {
    console.log('<<<<<<<<<<<', response);
    return Promise.resolve(response);
}, async error => {
    console.log('<<<<<<error<<<<<', error.response ? {...error.response} : {...error});//cancel and network error have no response
    return Promise.reject(error);
});


const request: thunkActionType = (requestOption: requestOptionType) =>
    async (dispatch: any) => {
        const {
            method,
            data = {},
            params = {},
            url,
            timeout = 7 * 1000,
            headers,
            toastTitle = '',
            successToastMessage,
            failToastMessage = 'لطفا اتصال خود را بررسی کنید',
            errorCodes = [],
            resolve,
            reject,
            pendingAction,
            errorAction,
            successAction,
            callback
        } = requestOption;

        // Start loading
        if (pendingAction)
            dispatch(pendingAction());

        try {
            // Calls "url" by "method" with "data" as body and "headers" and params
            const response = await instance.request({url, method, headers, data, timeout, params});

            // If axios call was successful
            if (resolve)
                resolve(response);
            if (successAction)
                dispatch(successAction(response.data.data));
            if (successToastMessage)
                renderToast(toastTitle, successToastMessage, toastTypes.SUCCESS);

        } catch (error) {
            // Component unmounted and axios unsubscribed
            const isCancelError = !error.config;
            // Cross-Origin error
            const isCorsError = !error.response;
            // Econnaborted because of connection lost or vpn
            const isEconnabortedError = error.code === "ECONNABORTED";

            if (isEconnabortedError) {
                if (errorAction)
                    dispatch(errorAction(failToastMessage))
            } else if (!isCancelError) {
                // Error codes are
                let errorCodeActioned = false;

                if (!isCorsError) {
                    const code = error.response.status;

                    errorCodes.forEach(errorCode => {
                        if (code === errorCode.code && !errorCodeActioned) {
                            if (errorCode.toastMessage)
                                renderToast(toastTitle, errorCode.toastMessage, toastTypes.ERROR);
                            if (errorCode.action)
                                errorCode.action(error);
                            errorCodeActioned = true;
                        }
                    });
                }

                if (!errorCodeActioned) {
                    if (!reject) {
                        if (errorAction)
                            dispatch(errorAction(failToastMessage));
                        renderToast(toastTitle, failToastMessage, toastTypes.ERROR);
                    } else {
                        reject(error);
                    }
                }
            }
        }
        if (callback)
            callback()
    }
;
export default request
