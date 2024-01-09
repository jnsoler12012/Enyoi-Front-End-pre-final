export default function (setMainContext, type) {
    window.localStorage.setItem('user', null);
    window.localStorage.setItem('TOKEN', null);

    if (type == 'Expire') {
        setMainContext((prevState) => ({
            ...prevState,
            user: {
                token: null,
                info: null
            },
            notification: {
                type: "WARNING",
                message: 'Session expired, please log in again',
            }
        }))
    } else {
        setMainContext((prevState) => ({
            ...prevState,
            user: {
                token: null,
                info: null
            },
            notification: {
                type: "INFO",
                message: 'Success on Log out',
            }
        }))
    }
}