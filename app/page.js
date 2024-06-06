"use client"

import { useEffect, useState } from "react"
import GameCard from "./gameCard"
import ServerList from "./serversList"
import Cookies from "js-cookie"

export default function Home() {

  const [servers, setServers] = useState([])
  const sessionToken = Cookies.get('sessionToken')

  // Get servers from the backend
  useEffect(() => {
    if (sessionToken) {
      fetch('http://localhost:3001/api/server', { credentials: 'include' })
        .then(response => response.json())
        .then(data => setServers([...servers, ...data]))
        .catch(error => console.error('Error:', error))
    }
  }, [])

  async function createGameServer(game) {
    const server = await fetch("http://localhost:3001/api/server/"+game, { method: 'POST', credentials: 'include' })
    const json = await server.json()
    if (server && server.status === 201) {
      setServers([...servers, json])
    }
    console.log({ newServer: json })
  }

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <GameCard image="minecraft1.jpg" createGameServer={() => createGameServer('minecraft')}></GameCard>
            </div>
            <div className="col">
              <GameCard image="xonotic.webp" createGameServer={() => createGameServer('xonotic')}></GameCard>
            </div>
            <div className="col">
              <GameCard image="terraria.avif" createGameServer={() => createGameServer('terraria')}></GameCard>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center">Your servers</h1>
      <ServerList servers={servers} setServers={setServers}></ServerList>
    </>
  )
}
