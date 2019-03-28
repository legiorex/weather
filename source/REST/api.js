const url = `http://mrkt.little.team/api/public/`;

export const api = {

    login (userInfo) {
        return fetch(`${url}users/login`, {
            method:  "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        });
    },
    resetPassword (login) {
        return fetch(`${url}users/reset-password`, {
            method:  "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        });
    },

};
