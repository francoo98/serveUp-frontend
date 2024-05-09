"use client"

import { useEffect, useState } from "react";
import GameCard from "./gameCard"
import ServerList from "./serversList";

export default function Home() {

  const [servers, setServers] = useState([])

  // Get servers from the backend
  useEffect(() => {
    fetch('http://localhost:3001/api/server', { credentials: 'include' })
    .then(response => response.json())
    .then(data => setServers([...servers, ...data]))
    .catch(error => console.error('Error:', error))
  }, [])

  async function createGameServer() {
    const server = await fetch("http://localhost:3001/api/server", { method: 'POST', credentials: 'include' })
    const json = await server.json()
    if(server && server.status === 201) {
      setServers([...servers, json])
    }
    console.log({newServer: json})
  }

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {/*<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">*/}
          <div className="row">
            <GameCard image="minecraft1.jpg" createGameServer={createGameServer}></GameCard>
          </div>
        </div>
      </div>
      <h1 className="text-center">Your servers</h1>
      <ServerList servers={servers}></ServerList>
    </>
  );
}
