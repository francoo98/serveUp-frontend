'use client'

import { useEffect, useState } from 'react'
import GameCard from './gameCard'
import globalState from './global-state'
import ServerList, { getServers } from './serversList'
import Cookies from 'js-cookie'

export default function Home() {

  const sessionToken = Cookies.get('sessionToken')
  const createGameServer = globalState((state) => state.createGameServer)

  return (
    <>
      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            <div className='col'>
              <GameCard image='minecraft1.jpg' createGameServer={() => createGameServer('minecraft')}></GameCard>
            </div>
            <div className='col'>
              <GameCard image='xonotic.webp' createGameServer={() => createGameServer('xonotic')}></GameCard>
            </div>
            <div className='col'>
              <GameCard image='terraria.avif' createGameServer={() => createGameServer('terraria')}></GameCard>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center'>Your servers</h1>
      {
        <ServerList />
      }
    </>
  )
}
