import { create } from 'zustand'

const globalState = create((set) => ({
    username: null,
    login: (username, password) => login(username, password, set),
    logout: () => logout(set),
    servers: [],
    getServers: () => getServers(set),
    createGameServer: (game) => createGameServer(game, set),
    removeServer: (serverId) => removeServer(serverId, set)
}))

async function createGameServer(game, set) {
    const server = await fetch('http://localhost:3001/api/server/' + game, { method: 'POST', credentials: 'include' })
    const json = await server.json()
    if (server && server.status === 201) {
        set((state) => ({ servers: [...state.servers, json] }))
    }
    console.log({ newServer: json })
}

async function getServers(set) {
    fetch('http://localhost:3001/api/server', { credentials: 'include' })
        .then(response => response.json())
        .then(data => set((state) => ({ servers: [...data] })))
        .catch(error => console.error('Error:', error))
}

async function removeServer(serverId, set) {
    set((state) => ({
        servers: state.servers.filter(server => server.id !== serverId)
    }))
}

async function login(username, password, set) {
    const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    if (response.ok) {
        const newUsername = { username: username }
        set((state) => (newUsername))
    }

    return response.status === 200
}

async function logout(set) {
    const response = await fetch('http://localhost:3001/api/user/logout', { method: 'POST', credentials: 'include' })
    if (response.status === 200) {
        set((state) => ({ username: null }))
        return true
    }
}

export default globalState