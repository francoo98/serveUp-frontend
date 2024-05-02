"use client"

export default function GameCard({ image, createGameServer }) {

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className='d-flex justify-content-center align-items-center'>
                    {/*<Image src={`/`+image} alt="minecraft" width="1920" height="1080"/>*/}
                    <img src={`/`+image} className="img-fluid rounded" alt={image}></img>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <button type="button" onClick={createGameServer} className="btn btn-primary btn-sm">Create game server</button>
                    </div>
                </div>
            </div>
        </div>
    )
}