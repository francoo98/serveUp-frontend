import Image from 'next/image'

export default function GameCard({ image }) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className='d-flex justify-content-center align-items-center'>
                    <Image src={`/`+image} alt="minecraft" width="400" height="425" />
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <button type="button" className="btn btn-primary btn-sm">Create game server</button>
                    </div>
                </div>
            </div>
        </div>
    )
}