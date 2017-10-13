const setItem = (key, data) => {
    if (!data || !key) return;
    sessionStorage.setItem(key, JSON.stringify(data));
}

const getItem = (key) => {
    if (!key) return;
    let data = sessionStorage.getItem(key);

    if (!data) return;
    return JSON.parse(data);
}

const removeItem = (key) => {
    if (!key) return;
    sessionStorage.removeItem(key);
}

const OPL = 'operateProblemList';
export const opl = {
    set: (data) => { setItem(OPL, data) },
    get: () => { return getItem(OPL) },
    remove: () => { removeItem(OPL) }
}