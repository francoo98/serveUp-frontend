"use client"


/*<div class="row mb-3 text-center">
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
      <div class="col-md-6 themed-grid-col">.col-md-6</div>
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
    </div>*/


import React, { useEffect, useState } from 'react';

export default function ServerList() {
    const [servers, setServers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/server')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setServers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='container'>
            {servers.map((server, index) => (
                <div className='row' key={index}>
                    <div className='col-6'>{server.name}</div>
                    <div className='col-6'>{server.ip}:{server.port}</div>
                </div>
            ))}
        </div>
    )
}