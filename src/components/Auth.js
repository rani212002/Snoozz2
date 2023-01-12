export function getUserauth() {
    let user_details = null;
    if (localStorage.getItem('userauth')) {
        user_details = JSON.parse(localStorage.getItem('userauth'));
    }
    const userauth = user_details;
    return userauth;
}

export function removesession() {
    localStorage.removeItem('userauth');
}