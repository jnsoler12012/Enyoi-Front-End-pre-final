export const decode = (string) => {
    return btoa(string)
}
export const encode = (string) => {
    return atob(string)
}