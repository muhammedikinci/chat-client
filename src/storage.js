const TOKEN_VALUE = "chat-token"

function setToken(token) {
    localStorage.setItem(TOKEN_VALUE, token)
}

function getToken() {
    const item = localStorage.getItem(TOKEN_VALUE)

    return item || ""
}

export { setToken, getToken }