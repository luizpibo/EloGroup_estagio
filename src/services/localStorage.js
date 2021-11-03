export const saveLeadToLocalStorage = (lead) => {
    try {
        const serializedLead = JSON.stringify(lead);
        localStorage.setItem('lead', serializedLead);
    } catch (e) {
        console.log(e);
    }
}

export const loadLeadFromLocalStorage = () => {
    try {
        const serializedLead = localStorage.getItem('lead');
        if (serializedLead === null) {
            return undefined;
        }
        return JSON.parse(serializedLead);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export const saveUserToLocalStorage = (user) => {
    try {
        const serializedUser = JSON.stringify(user);
        localStorage.setItem('user', serializedUser);
    } catch (e) {
        console.log(e);
    }
}

export const loadUserFromLocalStorage = () => {
    try {
        const serializedUser = localStorage.getItem('user');
        if (serializedUser === null) {
            return undefined;
        }
        return JSON.parse(serializedUser);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}