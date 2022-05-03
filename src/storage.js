const TOKEN_VALUE = "chat-token"
const USERNAME_VALUE = "chat-username"

function setToken(token) {
    localStorage.setItem(TOKEN_VALUE, token)
}

function getToken() {
    const item = localStorage.getItem(TOKEN_VALUE)

    return item || ""
}

function setUsername(token) {
    localStorage.setItem(USERNAME_VALUE, token)
}

function getUsername() {
    const item = localStorage.getItem(USERNAME_VALUE)

    return item || ""
}

export { setToken, getToken, setUsername, getUsername }