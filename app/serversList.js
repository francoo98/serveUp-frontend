"use client"

import React, { useEffect, useState } from 'react';

export default function ServerList({ servers, setServers }) {
    
    return (
        <div className='container'>
            {servers.map((server, index) => (
                <div className='row' key={index+"_server"}>
                    <div className='col-6'>{server.name}</div>
                    <div className='col-6'>{server.ip}:{server.port}</div>
                </div>
            ))}
        </div>
    )
}